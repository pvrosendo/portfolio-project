
![Basic Messaging Illustration](/assets/mensageria/mensageria.png)

## Understanding the problem

Let's start by imagining a specific problem and thinking about how we could solve it:

> [!NOTE]
> 1. We have an online sales system with a back-end service that stores products in a database and needs to sync price and quantity info with the front-end;
> 2. The other service we have is the front-end application, which, in simplified terms, displays products with up-to-date values and information, and also sends sales data to the back-end;
> 3. The system constantly runs operations, resulting in a high flow of all kinds of information.

Illustrating the problem in a very basic way, it would look like this:

![Initial Problem Illustration](/assets/mensageria/mensageria1.png)

If we stop and think quickly, it seems like a pretty simple problem — just build a controller to handle requests between the front-end and back-end along with database persistence.

The big issue comes when we start analyzing potential problem points, where we can identify one of extreme importance:

> 1. *What if one of the services goes down — how would the data be handled?*
> 2. *If the back-end becomes unavailable, how would the data coming from the front-end be persisted in the database? Would we lose all sales information and queries?*

There are many possible problems in this scenario. And of course, you can think of many solutions too, but here we'll focus on using messaging.

Getting back to it: some of the possibilities for addressing the problem are:
1. Analyze the *HTTP* status code return and handle it accordingly
2. Try using some *Retry* framework to keep retrying

> But why not act before the problem happens, instead of waiting for it to occur before taking action?

And that's where we can start thinking about messaging, because it would allow us to create an event-driven system, giving us the opportunity for asynchronous information exchange and ensuring greater system resilience.

## Introduction to Messaging

Look at the following diagram without me giving you any extra information:

![Problem scheme with Messaging included](/assets/mensageria/mensageria2.png)

*Does anything make sense? What is that "Message Broker" sitting between the two services? What kind of information is this "Event"?*

To answer those questions, let's think: since we've established that it's better to solve a problem by anticipating it rather than waiting for it to happen, we arrive at the question of:

- it's better to follow a line of `thing X only happens with the guarantee that thing Y has happened` than
- `thing X and Y both happen and, if a problem arises, it gets handled`;

And that's where the idea we're discussing here emerges. The main goal is to have a way to ensure that thing X doesn't directly depend on what thing Y has done.

Even if it's quite obvious, when I refer to "thing X" or "thing Y," I'm talking about the services.

> [!TIP]
> *Wait, but don't the services communicate with each other? Shouldn't they depend directly on one another?*

Yes and no. They communicate, but **they don't necessarily need to be synchronous**. They don't need to be exchanging information at every single moment for things to work correctly. In fact, that could easily result in data and information loss — which is exactly what we're trying to address here.


### Event-driven paradigm

For that, the event-driven paradigm emerges, where we design our system to function based on specific things happening. That is, here's an example:

- When our front-end registers a sale, it triggers a sale event
- Only from that point does our back-end go fetch that information to process and persist it in the database, instead of constantly polling for it.

> Ok, I get it, but how would this work in practice?

## Understanding the system

Now that we understand the basics, we need to build the system for it. We need to make our services have capabilities that can trigger the event.

That's where our friend comes in: the `Message Broker`.

### Message Broker

The message broker is a message server. It's the one that stores the messages that services will send, meaning it allows services to both *produce* and *consume* those messages.

- From this, we discover two more characters: **Producer** and **Consumer**.

### Producer and Consumer

After the explanation above you might have already figured out what they do, but just to make sure:

- **Producer**: the one who sends the message to the message broker — that is, the application that pushes to the queue.

- **Consumer**: the one who goes to the message broker and checks if there's any message for it to consume and perform some action.

A more detailed visualization can be seen below:

![More detailed messaging scheme](/assets/mensageria/mensageria3.png)

#### Queues vs Topics (Pub/Sub)

When we talk about messaging, there are two main patterns for how messages are distributed by the Message Broker:

- **Point-to-Point Pattern (Queues)**: a message is sent to a queue and consumed by only one Consumer. It's like a support ticket: once an attendant picks it up, the message disappears from the queue so no one else does the same work twice. Ideal for task processing (e.g.: resizing an image, processing a payment).

- **Publish/Subscribe Pattern (Topics)**: the message (often called an Event) is sent to a Topic. Multiple Consumers can "subscribe" to that topic and all of them receive a copy of the same message. It's like a mall loudspeaker announcing that a child got lost: multiple security guards hear the same message and act simultaneously. Ideal for notifying the system that something happened (e.g.: "Sale Made" triggers the email service, the invoice service, and the inventory service all at once).

## Going deeper into the problem

>[!NOTE]
> To help with understanding, the example I'm using illustrates services exchanging messages directly. But in real applications, Front-end applications (browsers or apps) don't communicate directly with the Message Broker for security and network protocol reasons. The correct flow usually goes: the Front-end makes a traditional HTTP request to an API (Backend A), and this Backend A acts as Producer, sending the message to the broker so that a Backend B (the Consumer) processes it later.

Going back, our diagram would actually look more like this:

![Problem scheme with Message Broker added](/assets/mensageria/mensageria4.png)


Let's now clarify the flow to make it as understandable as possible.

The services now communicate via messages — meaning that when one of the services executes an action, that service's *Producer* sends the message to the queue in the Message Broker. Meanwhile, the other service's *Consumer* is always watching the queue, so when a message is identified, it uses the message to execute another predetermined action.

> A message can contain a request, a response, or an event.

### Example

Let's bring this to a practical example:

- Imagine a sale was made and the inventory of a product must be updated in the database, but our back-end service went offline. In a classic scenario, that information could be lost, or we'd have to build workarounds for it.
- With our system in place, that inventory update information would stay in the queue until the back-end service came back online. When it came back, it would fetch the information from the queue and execute the procedure normally.

How does the Broker know it worked? (The ACK concept)

> You might be wondering: what if the Consumer fetches the message from the queue, starts processing the inventory update, but its server errors out halfway through? Is the message lost forever?

As you might imagine, the answer is no. Message Brokers use a mechanism called **Acknowledgement (ACK)**, which is basically a "confirmation receipt."

The flow works like this:

- => the Consumer reads the message, but the queue doesn't delete it immediately;
- => it just "hides" it (makes it invisible to other consumers);
- => Only after the Consumer finishes the job successfully does it send an ACK to the broker, saying "Done, you can delete it";
- => If there's an error, it sends a NACK (Negative ACK), or simply doesn't respond within a time limit, and the broker puts the message back in the queue to be processed again.


### Decoupling

The great lesson we can take from this is that applications don't need to know whether the other is online or not — and that's the magic, because that's where the famous **decoupling** comes in.

It's quite important, because in contexts with large teams or more complex systems that require greater resilience, it distributes the work responsibilities. That way, we can focus on just one specific service instead of dealing with several at once.

You can learn more by understanding the concept of Microservices.

### Main Industry Tools

Now that you understand the concept, you'll constantly come across these technologies when it comes to Message Brokers:

- **RabbitMQ**: One of the most traditional and widely used for the Queue pattern. Highly recommended for ensuring that complex messages reach their destination.

- **Apache Kafka**: Focused on the Topics/Events pattern (Pub/Sub) and processing massive data streams (Streaming). Built for extremely high data volumes.

- **AWS SQS / SNS**: Amazon's cloud-managed messaging solutions. SQS focuses on Queues, while SNS focuses on Topics (Notifications).

## Conclusion

Messaging comes as a robust solution to communication problems between services. It can be extremely useful if you need more resilience in your system's architecture, as it guarantees greater stability and scalability — through decoupling.

However, it's always good to evaluate whether your system actually needs to implement Messaging, since it's not always the best option.

There are cases where the system isn't that complex, so there's no need to decouple or implement such an elaborate solution. Simply exploring simpler options like the ones we mentioned at the beginning can be enough. In other words, it depends on your situation.



## References

- [#01 — Mensageria. Mensageria? Message Broker? O que é… | by Thiago Brito | Medium](https://medium.com/@devbrito91/mensageria-1330c6032049)
- [rabbitmq - Message broker vs. database and monitoring - Stack Overflow](https://stackoverflow.com/questions/48099098/message-broker-vs-database-and-monitoring)
- [O que é mensageria e o que eu ganho com isso? | Sensedia](https://www.sensedia.com.br/post/o-que-e-mensageria-tudo-o-que-voce-precisa-saber)
