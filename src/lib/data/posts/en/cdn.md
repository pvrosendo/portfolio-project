![Illustrative map of the CDN scheme](/assets/cdn/cdn.png)

## What is a CDN?

> It's a content delivery network with a spread-out network of servers so that *static* or *dynamic* content is delivered faster.

Simply put, these servers cache content and deliver it to end users who are closest to each one.

## How it works

These servers mentioned above are all interconnected, forming a massive network.

Providers place servers at strategic points called **network traffic exchange points**, and these IXPs (Internet Exchange Points) are locations where multiple internet providers connect to access different networks.

In the CDN ecosystem, these strategic locations spread around the world have a specific name: **PoPs (Points of Presence)**. A PoP is basically a local data center (for example, one in São Paulo, another in London, another in Tokyo).

Inside each PoP, there are what's called **Edge Servers**. The term "edge" is used because they sit at the edge of the network, as close as possible to the end user. When we say the CDN "delivered at the edge," it means the user's request didn't even need to travel across the internet to your origin server — it was resolved right there, at the Edge Server in their city.

So, by having access to these locations with very strong interconnection, providers significantly reduce costs by having direct access to various different networks, delivering data at high speed.

On top of that, CDNs also bring optimizations to standard data transfers and have data centers in carefully selected locations worldwide. The idea is to have a lot of security and centers designed to survive failures and congestion of all kinds.

## CDN vs. Hosting

Something that confused me quite a bit — and might confuse others too — is the relationship with hosting itself. But actually, a CDN doesn't host content; it helps cache data at the network edge — closer to the user than to the host — which improves the website's performance.

With that same caching idea, hosting bandwidth is also reduced, service interruptions are decreased, and security is enhanced as well.

## Advantages of using a CDN

It can vary a lot depending on the data being handled, but in general what stands out the most is:

1. **Website load time**: by using well-spread servers covering a larger area, the reach of end users is broader too. With caching, delivering that data to those users is much faster.

2. **Bandwidth cost**: also by using caching and other specific optimizations, CDNs can significantly reduce the amount the origin server needs to provide to make the site available.

3. **Availability and redundancy**: a lot of things can interrupt a website's operation, but with distributed logic they can handle high traffic and be more resilient to failures.

4. **Security**: provides some DDoS mitigation, improves security certificates, and brings even more optimizations.

### Reduced load time

As already mentioned, having servers spread geographically and strategically placed is what makes it easier for nearby users to communicate directly with the data centers.

This idea might still be a bit abstract, so let's take an example:

> [!NOTE]
> Scenario: You want to host your blog and you've decided to use AWS S3 to store your project's build files.

That's a solid and very commonly used idea. The big catch is that the bucket you're using is tied to a physical server somewhere specific that Amazon made available.

Assuming it's stored in *aws-us-east-1*, then if a user in the UK needs to access your site, they'll get a slower response than someone who's, say, in the United States.

- **The CDN's role**

The CDN steps in to take those files from S3 and distribute them to all the servers they've spread across various countries. So the new logic using a CDN (**CloudFront**, which is also from AWS, for example) would look like this:

- => The CDN grabs the files from your S3 Bucket and caches them on all of its edge servers around the world
- => when a user in the UK needs access, they don't need to go all the way to the US to fetch from your bucket;
- => instead, they go to, for example, the CDN's data center in the UK and grab the files stored in cache there.

It's worth pointing out that this isn't the only thing that makes it fast. We also have:

- hardware and software optimizations to enable [load balancing](https://blog.pvrosendo.is-a.dev/blog/load-balancer),
- the use of minification tactics to reduce and compress files and improve transfer speeds
- and finally, site acceleration for sites using TLS/SSL certificates, optimizing the connection.

I talked a lot about the website example — that is, static content. But how does a CDN help with Dynamic Content (APIs)?

We understand how caching handles static files, but dynamic requests (like a login POST or a database query) can't be cached, since the response changes per user. How does the CDN help in that case?

1. **Anycast Routing**: CDNs use a network protocol where multiple servers around the world share the same IP address. The global network automatically routes the user to the nearest server in milliseconds.

2. **Route Optimization (Private Backbone)**: Instead of the user's request "hopping" across dozens of slow, congested public internet providers to reach your server, the request enters the nearest CDN Edge Server and travels to the origin through the CDN's own private, super-fast "express lane."

3. **TLS Termination at the Edge**: The heavy security negotiation (the HTTPS handshake) happens close to the user, at the Edge Server, saving time. From there, the connection between the CDN and the origin is already pre-established and open.

### Availability and resilience

A system outage can be very damaging, so it's crucial that the distribution scheme be capable of withstanding and being resilient to various types of failures.

- With load balancing, traffic is distributed among multiple servers, which helps in cases of high system traffic;
- With what's called *failover*, if a CDN server goes down, it can redistribute to others, allowing the system to keep running;
- If an entire data center has issues, there are routing cases where everything is transferred to another available data center, ensuring no user loses access.


### Security

CDNs provide TLS/SSL certificates that are automatically renewed, guaranteeing authentication, encryption, and integrity.

### Bandwidth cost

Essentially, by sitting between the origin server/hosting and the user, the CDN reduces traffic between the servers and the rest of the internet.

Precisely because it serves content from cache, there's no constant need to communicate with the origin server, and since these origin servers charge for data transfers, this ends up being significantly reduced.

## The Cache Challenge: TTL and Invalidation

After everything we've discussed, one thing sticks in mind: caching is great for speed, but it brings a classic challenge: "I updated my site, but the change isn't showing up!" This happens because the CDN is still serving the old copy (the *stale* files) saved on the Edge Servers.

To deal with this, two fundamental concepts are used:

- **TTL (Time to Live)**: Think of it as the cache's "expiration date." You configure that an image file can stay in cache for 7 days, but an HTML file should expire every 1 hour. When the TTL runs out, the CDN is forced to go to the Origin Server to fetch the latest version.

- **Cache Invalidation**: If you deployed something critical and can't wait for the TTL to expire, you can trigger the CDN (usually via dashboard or API) and force an "Invalidation." This sends an order to the CDN to delete that specific file from all PoPs worldwide immediately, forcing it to fetch the new version on the next request.

## When not to use a CDN

I've talked a lot about the use cases and advantages of having a CDN managing your site's distribution, but like everything else, it's not always actually necessary to apply it.

> [!NOTE]
> Let's take a case: Imagine a school wants to use a website so its students can check their grades and school updates.

In this case, we don't need a CDN, because the school already knows that only students will access that site, and they're the priority. So they'll already receive it with speed and quality.


## Some CDNs

- IBM CDN
- Cloudflare
- CloudFront


## Conclusion

For many scenarios, using a CDN is crucial, so it's always worth considering. In general, especially for us mere humans, the cost of a CDN is far more worth it than the overall cost of geographically distributing servers across multiple locations.
