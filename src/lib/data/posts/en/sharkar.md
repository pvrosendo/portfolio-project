I'm going to share a bit of the journey and experience of building Sharkar. My goal is for this to be a fun ride and an honest record of a cool project.

> If you want to check out the project: https://www.sharkar-pv.com

## The Idea

The idea for the project came about in a pretty simple way, actually. I really like cars and, even though I can't afford to buy one right now, I was always browsing and checking car prices. Being an essentially organized person, I started thinking about saving cars so I could track their prices over time and maybe buy the one with the best *cost-benefit* eventually.

At first, I started jotting down cars in my own Obsidian — *if you don't use any software for organization and note-taking, I highly recommend it* — logging things like name, brand, price, year, transmission type, fuel, etc.

The obvious started hovering in my mind: I realized it was becoming massive and boring. It was a drag to keep doing that. That's when I thought about building a basic application so I could do this in a more convenient and intuitive way.

## Stages

Each stage of building the project is split into the phases I observed and kept improving/building on.

### v0.0.0 - Embryo: the basic prototype

Despite finding it really cool, I was always pretty bad at front-end, so I wanted to put together something super simple — just a form to send data to an API and have it save the info in a database.

That's where the first version of the project came from: a *very* basic form with several input fields sending that data to the API and a single database table storing the cars.

> Unfortunately I don't have a record of that moment — it would've been epic to put here. But it was literally an index.html with a form that wasn't even centered. Everything running locally.

Embarrassingly enough, it did what I wanted: a basic interface and a somewhat more structured storage. The problem was it was hideously ugly, so I thought about improving its appearance.

Since I had already gotten a surface-level look at how React worked and my job at the time involved a lot of Angular applications, I decided to build the project in Angular to see if I could make it at least somewhat presentable.

The back-end was something simple and straightforward too — Java with Spring Boot and SQL Server as the database. Everything running locally.

### v1.0.0 - Start: Angular enters the picture

As I mentioned, I knew nothing in-depth about front-end — even though I enjoyed it and messed around with it — so what I decided to do to actually learn it properly and make the project look decent was watch some courses and YouTube videos — in addition to my favorite tutorial site (https://www.tutorialspoint.com/tutorialslibrary.htm) — like:

- Café com Bug: https://www.youtube.com/playlist?list=PLhna1crYw0SOFqiss05ybqJCc6fvGn6BF
- Loiane Groner: https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G
- Matheus Battisti - Hora de Codar: https://www.youtube.com/playlist?list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw

I started watching and immediately putting what I learned into practice, and the front-end started taking shape. Instead of the basic form, I built it using Angular reactive forms, added Bootstrap to the project, etc.

Now it was actually more pleasant. It had genuinely gotten better. At that point there were two pages: one for the form and another to view the registered cars.

I'll leave a record of what the view page looked like (notice the broken footer):

![View section of registered cars - first version](/assets/sharkar/sharkar1.png)

#### Conclusion

The big problem — and the main one — is that the feature that motivated me to create it wasn't being applied: **ease of use**.

It was not at all easy or practical to go through each field in the form and type in the name, price, brand, etc., for every single car. That brought me to the idea of integrating the Fipe API (which I already knew about, but hadn't wanted to use before). And from that, the next version of the project was born.


### v1.1.0 - Progress: The logic takes shape

With that mindset of making the process easier, I revamped both the project's logic and its visual design.

#### Front-end revamp

On the front-end, which was my Achilles' heel, I had a lot of conversations with my buddies gepeto (ChatGPT) and germínio (Gemini) to clear up doubts and get more ideas, and that's how I massively improved the project visually too. It was a very difficult learning process, but it was a lot of fun too. I never imagined I'd build something like that, and it was because of this project that I managed to nail the style I'd been wanting to achieve for a long time.

![Redesigned landing page](/assets/sharkar/7.png)

#### Using the Fipe API

On the back-end, I added all the logic to query the Fipe API, so I just had to select and search for the car's name, year, and brand — and it would automatically pull the rest of the info.

![Redesigned car registration page](/assets/sharkar/4.png)

#### Conclusion

This version already brings a lot of improvements, but it also brought me a greater desire to build this project thinking not just about 1 user, but about many. I wanted to see if I could design a system not just for myself, but for other people too. And that's where the fourth version of the project emerged.


### v2.0.0 - Multiplication: wanting isn't enough

This was maybe the most tedious part, even though the hardest was the front-end. That's because I wanted to implement the possibility of having multiple users, and for that I'd need to implement things like user authentication, create a few more tables, and build a more concise and well-designed entity relationship for the project.

#### Auth

![Login section](/assets/sharkar/2.png)

I pulled in Spring Security and JWT and implemented token-based authentication in the project. I wanted something solid, so I implemented password hashing and Http-only Cookies, trying to make it as secure as I could manage. Initially I was using localStorage, but I got worried that wasn't great from a security standpoint, so I went back to the API and the front-end to implement that.

![Dashboard](/assets/sharkar/3.png)

This made it look really solid and gave the project a whole new look. Now you had an internal and external section, using interceptors on routes to make them secure and private.

#### Account-config

In addition to that, I implemented some basic account features like "forgot password," changing your username or email, changing your name, etc., all in a dedicated user settings page.

|                     |                     |
| ------------------------------------ | ------------------------------------ |
| ![](/assets/sharkar/5.png) | ![](/assets/sharkar/6.png) |


#### Deploy

This was the first version I decided to put online, and I took the opportunity to learn more about hosting in general. Even though I had an idea of how things worked, I wanted to see and revisit some of that stuff in practice. My main goal was something without costs, since even though I was thinking about building the project to support multiple people, I wasn't actually expecting it to happen.

##### Understanding the situation

The deployment process was pretty interesting, since I had some thoughts and ideas but wasn't sure about any of them.

I did the deployment of the first version of the blog and Sharkar around the same time, so I had it in mind that I could do something really educational for people without experience or knowledge of the tools: **explore all of them**.

At first, my thinking was that since the blog wasn't going to be very challenging, I'd rather leave it for a simpler deployment — so I used **Vercel**'s infrastructure, which is very established and makes the deployment process ridiculously easy.

> You point it to your project's repository and it implements everything automatically, including a deployment workflow through commits.

Since the Blog would be on Vercel and I wouldn't have many challenges with that, I decided that for Sharkar I'd use AWS cloud services.

##### Choosing the services

It's worth noting that throughout the conclusions above I was also researching a lot to better understand how the deployment could work for each case. I wanted to understand what my decision scope could be based on what I wanted at that moment: learning, experience, and a genuinely good deployment.

###### Front-end

> [!NOTE]
> Getting the site live

I considered various options like Vercel, Render, S3, and even EC2 (a VPS). Researching directly, I weighed price (whether it was free), difficulty, learning curve, and my personal goals.

*I thought about using a VPS, which would be extremely educational, but it would also be way over-engineering, so I concluded that maybe it was better to use AWS services (S3) separately.*

In the end, I decided that a good choice would be AWS Simple Storage Service (S3), since it was a simple storage service, free (for what I wanted to use), and with a very interesting option: static website hosting. That was exactly what I wanted — to host Sharkar's front-end, knowing it wouldn't have any very critical function beyond communicating with the API.

If you want to see how to do this S3 deployment process, check it out here: [Hosting a website on S3](https://pvrosendo.is-a.dev/blog/hospedando-site-no-aws-s3).

> [!NOTE]
> Discovering CDN

After doing the deployment I ended up discovering and learning a bit about [CDN](https://pvrosendo.is-a.dev/blog/content-delivery-network) and realized I'd need it to keep my site up and easily accessible to as many people as possible. It would also help me with site security (SSL/TLS certificate and HTTPS) — which was something I already had knowledge of — so it was great.

Now I needed to understand how to create a distribution for my site and, using my buddy Gemini, I asked it what the best option would be. It promptly recommended taking advantage of CloudFront, since I intended to learn as much as possible about AWS Cloud.

If you want to see how to do this CloudFront distribution setup, there's a section showing it in the article: [Hosting a website on S3](https://pvrosendo.is-a.dev/blog/hospedando-site-no-aws-s3)

> [!NOTE]
> Building the pipeline with GitHub Actions

I knew from the beginning that I'd want to set up a workflow for the entire project deployment. I saw that GitHub Actions was a very interesting option, so I decided to go with it. I did some research and put the pipeline together, running into some issues mainly around AWS and access permissions.

###### Database

The database part was maybe the most complicated, since hosting databases is a very sensitive topic due to the high cost.

*I thought about storing it on Render, since it's free, but there was the limitation of only being able to use PostgreSQL (since it's open-source) — at the time I was on SQL Server and thought that would be a problem.*

I ended up deciding to use RDS (Amazon Relational Databases) from AWS since I wanted to build the whole ecosystem in their cloud.

> [!CAUTION]
> Costs I incurred

Something I messed up was the cost — a pure mistake from lack of attention. I thought the configuration I had set up limited consumption to exactly the Free Tier that AWS provides.

Unfortunately I was wrong, and I only found that out much later (who hasn't? I always saw people talking about this and even trying to avoid it happening to me, it didn't help at all)

**Long story short**: During my many tests and some unexpected accesses, I ended up forcing the instance usage and CPU consumption went over the limit.

###### API

This was the part I was most apprehensive about using AWS for. Even though it was the area where I had the most knowledge, I had zero experience with Amazon's services.

I chose to go the **ECS** with **Fargate** route. This would be a more manageable path since it uses clusters and containerization, which I already knew, and Fargate, which is a mechanism for running containers without needing to configure and provision servers.

The API deployment was by far the one that generated the most problems, I think due to the number of processes and configurations needed. On top of creating the AWS services (ECR, ECS, Task Definition, IAM, etc.) I still had to build the pipeline — which I also used GitHub Actions for.

After A LOT of stress and wear dealing with pipeline issues, CORS, database connectivity, environment variables, and others, I managed to get the API up.

*Little did I know there would be even more problems when implementing the Load Balancer and DNS changes for the domain I bought...*


###### Final integration

With everything built, all that was left was to integrate it all. What does integrating mean? It means confirming that all services are communicating, setting up a domain, verifying the security level, etc.

First I bought a domain because I wanted to see what the process looked like. I used AWS's own service, Route 53. With the domain purchased, I went to the ACM service to request certificates for the API and front-end domains.

It was at that point that I researched more about [Load Balancer](https://pvrosendo.is-a.dev/blog/load-balancer) and found it interesting to apply to the project to see how it worked, especially since I had bought a domain.

I decided to use an Application Load Balancer from ELB (AWS Elastic Load Balancing) and started by creating a target group — at that point I added a health checker to the API (used Spring Actuator) — and the ALB.

After the implementation, I recreated the ECS service to integrate with the ALB and the target group I'd created earlier.

With the distribution and load balancer created, we now needed to point the DNS. I created two records in Route 53 — one alias for the CloudFront distribution and another with an alias for the ALB.

Now, finally, everything was pointed to the right places and actually working fully.

#### Re-deploy

I was very satisfied with the experience and challenges I had throughout that entire deployment journey, but I ended up running into some unexpected problems. As I mentioned in the database deployment section, I hadn't configured things exactly right and ended up with a decent charge from RDS. On top of that, I had the cost of buying the domain and some other charges from services used to get the API running.

My goal with the project was to keep it more as a personal project and learn about the stages in general, so I decided to delete all the services running on AWS and put everything completely on IaaS platforms with a free tier guarantee. So my front-end went to **Vercel** and the API and database went to **Render**.

I had no problems transferring — as I mentioned in other parts, these services are built to give you all the structure so you can focus purely on code. Since I already had all of that stuff ready, it wasn't an issue.

#### Conclusion

And that's how I finished building this new version of the project — and for now, the definitive one.

"For now" because, I imagine you know this, but just in case: the more you study, the more you realize how little you know.


### v3.0.0 - Maturity: the rebirth

> If you made it this far... I can't even explain why, but okay. This is the current stage, where I'm applying all the knowledge I've picked up in recent times.

This is the version I project to be the most complete and optimized with the features I consider worth having.

The truth is that as you study and gain experience, you start noticing some bizarre things you did before. And with this project, clearly, it's no different. I could just leave it as is, but I have a genuine soft spot for it.

#### Rebuilding

I decided to rebuild the back-end from scratch. Looking at the project now brings me joy — because it means I learned and now I see mistakes I couldn't see before. I'm doing it from 0 in Go with Echo and all the search logic will be done differently. Unnecessary calls, confusing logic, optimization issues — these are all obvious problems and I'm fixing them in this version.

The database will remain Postgres for its robustness and the cool possibilities it offers.

The front-end won't be touched. I have a soft spot for this project and, aside from what will no longer be necessary, its visual identity will remain the same — including the Angular and Bootstrap stack.

For Auth I'll be removing all the hand-rolled logic. I'll delegate it to Auth0, which provides a solid OAuth2 + OIDC implementation. That way the data stays more secure and I don't have extra unnecessary work.

#### New features

- A scheduled job to run at the start of every month to update car prices and, with that update, run an email dispatch job to notify users based on the price difference for their registered cars. An email with a spreadsheet of the cars, their values, price differences, links to sales sites, etc., will be sent.

- I'll also bring car image generation when selecting car data on the form screen. It would be a nice addition for when someone is registering vehicles. I had implemented the change logic before but couldn't find any API that provides car photos for free. My main idea if I don't want to invest in that is to use some AI to generate the photos — even if they aren't accurate or correct, it would be cool to have a visual sense of it with a disclaimer that it was generated by artificial intelligence.

- The last one (that I'm thinking of now) would be getting the paid version of the Fipe API to be able to provide a more complete dashboard of all car value changes — so I could not only notify and show the difference from one month to the previous one, but actually provide a dashboard spanning, say, several months, showing the trend of car value appreciation and price changes.

---

Last updated: 2026-02-21
