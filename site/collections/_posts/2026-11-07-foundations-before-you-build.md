---
layout: post
title: Foundations Before You Build
description: "Earn trust, make the risk visible, and leave a baseline the team can carry."
date: 2026-11-07
image: "/images/posts/2026/11-07.jpg"
tags: ["2026", "leadership", "work"]
---

---

<center>
<h3>Earn trust first. Make change after.</h3>
</center>

---

<br/>

Stepping into an organisation as a technical leader is a particular kind of moment, whether you are there on a short contract, as an interim, or in a new permanent role. The timeline changes, but the challenges do not, not really. You still join a train that is already moving. You still do not get to watch from a distance, or spend weeks on strategy decks that never quite leave the slide. The work still has to happen. The people doing it still have to trust you.

I have a lot of empathy for that moment, on both sides. Engineers have usually been carrying the weight for a long time: fragile systems, unspoken rules, and the quiet pressure of keeping delivery going. Leadership is usually under a different pressure: ship, grow, and prove that the next thing on the roadmap is profitable. A leader who arrives with a pre-written answer, and no interest in how the team got here, will not be heard. And they shouldn’t be.

Most of my career has been in highly regulated environments, and the brief, when you step in, is often some version of the same thing: help with technical debt and regulatory pressure without stalling the engineering team’s feature work. That is a reasonable ask. It is also impossible if you treat the team as a problem to be fixed, rather than the people who already know where it hurts.

When an organisation reaches this stage, the friction rarely comes from a lack of talent. It is almost always an alignment problem. The system design, the compliance obligations, and the way teams are structured are pulling in three different directions. People feel that pull every day. They are tired of it.

Here is what I keep coming back to in this kind of work: how to see the landscape honestly, build trust quickly, and leave behind a technical strategy that still stands after I have gone.

## Finding the Friction First

The temptation, in a new environment, is to start rewriting architecture or introducing new processes almost immediately. That is a mistake. You have not earned that yet. The first job is a straightforward, low-ego look at how things actually work, and that starts with listening.

I don’t begin by auditing every line of code. I begin with the people who live in the system. They hold the knowledge of the platform, the domain, and the unofficial culture that never makes it into a diagram. If you skip that, you will solve the wrong problem, and you will do it in a way the team cannot carry.

Early on, I am trying to find where the friction lives:

- **System bottlenecks.** Where are the single points of failure, fragile integrations, or performance problems that keep the team up at night?
- **Unspoken requirements.** What compliance rules, data-handling needs, or performance expectations live in people’s heads, rather than in the design of the system?
- **Delivery drag.** Where are engineers spending energy fighting tooling, environments, or manual releases, instead of building the product?

Focusing on friction, rather than theory, does two things at once. You get a clearer map of the debt. And the team can see that you are taking their reality seriously. Trust is built in that gap: between arriving as the expert, and showing that you are willing to be taught.

## When the Risk Doesn’t Feel Real Yet

There is a pattern I have seen more than once in growing companies that *should* be working in a highly regulated way, but have never really felt the cost of missing that expectation. They may still be small enough that the FCA, or whichever body sits over them, has not paid them much attention. No penalty has arrived. No audit has really hurt them. From the inside, the risk does not feel real. That is not a moral failing. It is what happens when the incentives have always rewarded shipping, and the industry has not yet made the alternative expensive.

When that is the case, regulation is easy to treat as tomorrow’s problem. What the business wants, understandably, is quick-and-dirty delivery. Feature work is visible. Maturity work is not. If you have never been punished for skipping the unglamorous parts, asking a team to slow down and bring the basics up to a safe standard feels like process for its own sake. It can come across as just another layer of "red tape": something people know they are supposed to care about, but don’t, because nothing bad has happened yet.

That is a fragile place to be. The impact of ignoring the technical and legislative work is rarely clear until it is too late. By then you are supporting poor-quality, fragile systems, and the path back is far harder than the path of doing it earlier would have been.

This comes up sharply when you are asked to outline a strategy for a business-critical path that will be highly regulated. The pull is to build on what is already there and keep shipping. Sometimes that is the right call. Sometimes the honest assessment is that it is not: the systems, and the teams around them, are not yet at a foundational level, and building the next layer on top would lock in debt, risk, and a way of working that will not survive proper scrutiny.

When that is true, the first piece of work is not to introduce a set of standard patterns, or a set of controls. It is a conversation. You have to sell the need for that foundation twice: first to the business, then to the teams.

With the business, the job is to make the risk recognisable without scaremongering. Not "the regulator might be cross", but: this path is critical, it will be regulated, and if we build it on an immature base we will have to unpick it later, under more pressure, at more cost, with less trust from the people doing the work. Quick-and-dirty is only cheap until it isn’t.

With the teams, the job is different. They are the ones who will live with the change. If the organisation has always rewarded shipping over craft, asking them to invest in maturity can feel like being told their previous work was not good enough. It isn’t that. It is that the next stage of the product needs a different level of care, and they deserve a platform, and a way of working, that can actually hold it. You cannot ask people to raise the quality of what they build if the ground they are standing on will not take the weight.

Only once that is understood, on both sides, does it make sense to talk about what the foundation actually looks like: clearer practices, more reliable systems, and enough shared understanding that regulation can be designed in rather than bolted on. You cannot embed compliance into defaults if nobody has agreed that the defaults are worth investing in.

## Aligning Structure to Architecture

You cannot tidy the software design without looking at how teams are set up to build and maintain it. The two are tied together. If the architecture asks for autonomy, and the organisation asks everyone to wait on the same shared service or the same exhausted lead, people will keep burning out in the gap.

Looking at team structure is as important as looking at system diagrams. I am not doing this to reorganise for the sake of it. I am trying to understand whether the way we work is making the architecture harder than it needs to be:

- **Clear ownership.** Are teams aligned to real business domains, or are they constantly blocked by shared code and cross-team dependencies?
- **Cognitive load.** Are developers expected to be domain experts, cloud engineers, security auditors, and release managers all at once? That is not a badge of honour. It is a sign the system is asking too much of them.

Aligning team boundaries to the domain architecture reduces key-person dependencies and gives teams genuine autonomy over their delivery pipelines. That is the structure you are trying to leave behind: not a neater org chart, but a way of working that does not depend on one exhausted lead holding the whole thing together.

## Leaving Something the Team Can Carry

The real measure of this kind of work is not how many fire-fighting meetings you sat in. It is how the organisation feels once you are no longer the person holding all the context. Did you leave people more confident, or more dependent? Did you leave a trail of context, or a set of clever choices that nobody quite understands?

I try to be a good scout: leave the place a little better than I found it. ADRs help, but they are not enough on their own. If the plan for the foundation only lives in your head, in a slide deck, or in a set of decisions nobody else helped to shape, it will not last. Teams need a way to *see* the work, *understand* why it matters, and *keep planning* it after you have stepped back.

A few things have consistently helped:

- **A shared picture of now and next.** Not a novel, and not documentation written only to satisfy an auditor. A simple current-state view, and a short description of the foundation you are aiming for, so people can find themselves in the landscape. If the only map is the one you carry into meetings, the team cannot navigate without you.
- **Lightweight Architecture Decision Records.** Writing down the "why" behind key choices, trade-offs, and compliance constraints gives the team a shared memory. It means people do not have to re-argue decisions that were already hard-won, and it gives new joiners the context they actually need.
- **Foundation work on the same board as feature work.** If raising the baseline is always "we'll do that later", it will lose to whatever is more visible. The maturity work needs to be planned, owned, and sequential, with a clear idea of done, just like anything else the team is trusted to deliver.
- **Lead engineers as the authors, not the audience.** Put the energy into the people who will still be here. Walk through the picture and the decisions with them, make the thinking visible, and let them write, challenge, and own the next slice. When they help shape the change, they will champion it: not because the documents are perfect, but because the thinking is no longer yours alone.

That is the trust you owe the people who remain: not a heroic exit, but a foundation, and a way of working, they can stand on.

## Moving Forward

Complex platforms, regulation, and growing teams need clear thinking and practical delivery. Moving from quick-and-dirty delivery to a foundation you can actually build on is entirely possible. It needs honest assessment, enough time with the people who will keep the work going, and leadership that treats trust, and risk, as part of the architecture, not a soft extra.

I am currently exploring my next contract opportunities in **Architecture, Technical Strategy, and Interim CTO Advisory**.

If your organisation is scaling, working through complex system change, or preparing for important security and compliance milestones, I’d be happy to chat. You can find me on [LinkedIn](https://www.linkedin.com/in/jessica-brentnall/).

_Effort now. Less pain later._

J.

---

<div style="text-align:center" markdown="1">
<img src="{{site.baseurl}}/images/postlogo.png" width="150" alt="Logo of JBRENTNALL DIGITAL, a company offering Architecture & Engineering Leadership on a contract basis">
</div>
