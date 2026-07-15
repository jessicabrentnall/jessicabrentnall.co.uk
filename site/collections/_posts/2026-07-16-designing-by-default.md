---
layout: post
title: Designing By Default
description: "Embed security, compliance, and performance into your architectural designs."
date: 2026-07-16
image: "/images/posts/2026/07-16.jpg"
tags: ["2026", "work"]
---

---

<center>
<h3>Prepared patterns, over reactive hussle. </h3>
</center>

---

<br/>

I have a lot of empathy for the cognitive load and breadth of knowledge expected of engineers today. When we sit down to solve a problem, we aren't just writing code. We are expected to ensure that solution is reliable, sustainable, and maintainable. We’re juggling testing practices, infrastructure trade-offs, cost optimisation, performance, user experience, and security... the list goes on.

There is tooling to help, of course, and in larger organisations, you might have specialists to lean on. Some argue that AI is the answer to this cognitive load; while it is a fantastic productivity aid, I’d argue that if these foundational concerns aren't considered early, they only become exponentially harder to address the longer they are neglected.

That is why I’m avoiding the buzzword-heavy _"Compliance-Driven Design"_ label for this post. In my experience, when we treat security, compliance, and infrastructure as separate, competing practices, it leads to overwhelming "task-list" fatigue. When every non-functional requirement feels like a chore, we tend to reach for quick-and-dirty fixes, or worse, de-prioritise these concerns entirely because the rework feels too daunting.

How do you create high-quality software without overwhelming your engineers or stalling delivery? You stop treating compliance as an add-on. Instead, you embed these concerns into the design phase, establish repeatable patterns, and bake them into the definition of "done."

**Is it easier said than done? Absolutely.** It requires a significant cultural shift. However, in a regulated environment, the trade-off is worth the investment.

## Warning Signs Of Overwhelm

It is easy for teams to exist in a state of chronic overwhelm without truly recognising it. This is often referred to as the "boiling frog" trap: the friction of the work increases so gradually that it becomes accepted as simply "how we work." In reality, these teams are often work-rich and time-poor, trading their bandwidth for the sake of just getting the job done. This can sneak up on teams resulting in burnout and mistakes.

This is most common in high-pressure, regulated environments. In these settings, teams can appear deceptively productive, shipping features at speed, but they are often working hard rather than efficiently. The team is burning through capacity, held together by sheer effort, while the underlying process generates a mounting, hidden debt of cognitive load.

If you aren't sure if your team is carrying this unnecessary weight, here are some of the indicators I look for:

- **The "Final Sprint" Panic.** Developers are left scrambling to add security, logging, or auditing features at the very end of a project. These requirements are often treated as "implicit", expected to be handled without being explicitly defined, or are shunted to separate tickets that are perpetually de-prioritised. This eventually results in critical security gaps, compliance failures, or last-minute delivery delays when the "hidden" work finally becomes impossible to ignore.

- **The Review Bottleneck.** Team delivery speed is consistently throttled by manual, opaque, or late-stage architecture reviews that act as "gatekeepers" rather than collaboration. Because these reviews happen too late and rely on external specialists, they inevitably trigger costly rework. This creates a dangerous cycle: teams start to bypass the process entirely just to ship their work, which leads to inconsistent technical decisions and a sprawling landscape of unmanaged debt.

- **Knowledge Silos.** Technical compliance or security expertise is concentrated in a single person or a small team. When these specialists become the only individuals who know how to design, implement, or observe the required controls, the rest of the team is effectively blocked from making progress. This creates a high-risk "key-person dependency" where the delivery of compliant, secure software grinds to a halt the moment those individuals are unavailable.

- **Documentation as a Tax.** Documentation, whether it be C4 diagrams, network diagrams, sequence flows, ADRs, or runbooks, is viewed as "non-productive" admin done only to satisfy an auditor. This mindset often extends beyond the engineering team to the wider business, which fails to see documentation as a high-value asset. In reality, effective documentation should serve as the backbone for onboarding, technical knowledge sharing, and reducing the constant need for sync meetings.

- **Reactive Audit Response.** Technical choices are dictated by the looming threat of the next audit rather than by consistent engineering standards. When audit deadlines approach, teams are forced to scramble and pivot, often treating compliance as "unplanned work" that displaces core product commitments. This creates a cycle of stress and instability, putting client deadlines and feature roadmaps in direct jeopardy whenever the audit window opens.

If these sound familiar, the problem isn't that your team lacks skill; it’s that your process is forcing them to hold too much disconnected context in their heads at once. They don't have the architectural support in place to make the work manageable.

## The High-Level Concept

The goal is to move away from "checking boxes" toward _integrated, considered design_.

Compliance, security, and critical business concerns, such as performance or cost-efficiency, shouldn't be treated as afterthoughts that surface at the end of a sprint. Instead, they should be foundational inputs into your initial design.

When you are architecting a solution, your process should inherently account for these requirements. You shouldn't be asking if security or performance compliance is necessary; you should be asking, "How does this solution align with our data residency policy, our standard identity-access patterns, and our performance budgets?"

By establishing an architectural reference of patterns and practices, you shift from treating every requirement as a unique, burdensome task to applying proven, reusable standards. You aren't asking an engineer to solve a complex regulatory, security, or performance problem from scratch; you’re asking them to adopt a standard that has already been verified to meet the company's needs.

## What Is Needed

- **Holistic Discovery & Gap Analysis.** You cannot design for what you haven't identified. This requires an honest, deep-dive assessment of your entire landscape. We must define your requirements, whether they are rooted in regulatory compliance, contractual obligations, security mandates for high-stakes environments, or core business drivers like performance. Crucially, this involves auditing your current state to identify where your processes are failing, where debt is accumulating, and where your team is being forced to work against the system rather than with it.

- **Integrating Requirements as First-Class Citizens.** These concerns must be treated as requirements, not as an audit checklist bolted on at the end. This means moving from abstract instructions to clear, measurable, and testable success criteria. When these requirements are baked into the definition of "done," they become the guardrails that enable speed, not the hurdles that prevent it.

- **Engineering the "Golden Path" (Architectural Standards).** It is not enough to define the rules; you must build the path of least resistance. This is the creation of a library of approved, battle-tested architectural patterns, infrastructure-as-code templates, CI/CD security gates, and standardised data access patterns, that map complex regulatory and technical requirements directly to implementation. While this library is built iteratively, the processes for establishing and evolving these patterns must be put in place from the start.

- **Operationalising the Standard.** The final, most critical phase is embedding these patterns into the daily ways of working. The goal is to move beyond static documentation to a point where "the right way" is the natural way. By integrating these patterns into the team’s standard rituals and workflows, you empower engineers to design secure and compliant solutions by default, without needing to become experts in the intricacies of compliance or security themselves. When the foundation handles the complexity, the team is free to focus on delivering value.

## Where This Approach Applies

This methodology is agnostic to the source of the requirement. However, it is not a "one-size-fits-all" solution; it is a prioritised framework. We focus this rigorous design approach on the constant, high-value aspects of your business, the areas where the impact of failure is significant enough to turn a "nice-to-have" into a business-critical "must-have." By working with the business to define their risk appetite, we identify where we must invest in these patterns to provide the greatest protection and operational leverage.

- **Compliance.** Moving beyond reactive "tick-box" exercises. For instance, when a system processes cardholder data, PCI compliance is not an afterthought, it is a baked-in architectural standard. We identify the regulatory and contractual requirements essential to your operations and embed them as default patterns. This protects the business from the legal and financial fallout of non-compliance, while simultaneously removing the "audit tax" from engineers. By building systems that prove their own compliance through embedded evidence collection and observability, we ensure your team can demonstrate control without the scramble of manual evidence gathering.

- **Security.** This discipline is broad, but the "Golden Path" makes it manageable. We define security-by-default patterns based on your specific risk appetite and legal obligations for data protection. For high-stakes environments, this means moving away from manual security reviews toward identity-first architectures and pre-approved, hardened infrastructure templates. We prioritise these patterns where the threat surface is most dangerous, ensuring your team has the guardrails to build securely without needing to be security specialists themselves.

- **Business Concerns.** These are the goals that define your competitive edge. If your business depends on high-velocity throughput, then performance is not an optional check; it is a mandatory architectural invariant. If cost-efficiency is your primary concern, then automated cost-tracking and resource-usage patterns are baked into your design library. Whatever the core driver of your business, we treat it as a foundational constraint, embedding the measurement of that impact (e.g., latency budgets or cloud spend) directly into your design patterns. This turns your business goals into technical reality, making the impact visible from the very first line of code.

## The Mechanism of Evolution: Architecture Decision Records (ADRs)

Many teams struggle with fragmented knowledge and decision-making bottlenecks because they lack a formal way to track architectural intent. If your organisation doesn’t currently use Architecture Decision Records (ADRs), implementing them is one of the fastest ways to break down the silos I described earlier.

ADRs serve as more than just documentation; they are the primary mechanism for:

- **Removing Silos.** By sharing a proposed decision early, you invite input from specialists—security, compliance, or performance leads—before the code is even written. This ensures their requirements are addressed at the start, not as a gatekeeper at the end.

- **Avoiding Rework.** By recording the "why" behind a technical choice, you prevent future teams from repeating the same mistakes or questioning established standards, significantly reducing costly rework.

- **Reducing "Meeting Fatigue".** A well-written ADR acts as an asynchronous source of truth. It allows stakeholders to review and comment on designs without the need for endless, overlapping sync meetings.

- **Iteratively Improving Standards.** When we embed a section for "Compliance and Non-Functional Impacts" into the ADR template, your decisions begin to form a living repository of architectural standards.

Over time, this repository stops being a collection of static documents and becomes a high-value asset. It captures the history of your technical trade-offs and guides the next team to make the right choice, ensuring your "Golden Path" evolves alongside your business rather than becoming a brittle or outdated constraint.

## The Outcomes

By shifting to an integrated design model, you move from a reactive, high-friction environment to one that treats stability and compliance as an engine for delivery, not a drag on it.

- **From "Disruptive" to "Embedded".** Compliance, security, and performance become "part of the work." By baking these requirements into your design patterns, you eliminate the need for last-minute scramble cycles and audit-driven pivots.

- **Reduced Cognitive Load.** By providing engineers with a "Golden Path" of pre-approved, battle-tested templates, you remove the burden of navigating complex requirements from scratch. Engineers can focus on shipping features, confident that the foundation they are building on is already compliant and secure by design.

- **Decoupled Decision-Making.** Through the use of ADRs and standardised patterns, knowledge is no longer trapped in individual silos. You create a transparent, asynchronous flow of information that allows teams to move fast with autonomy, while still aligning with the broader architectural and risk appetite of the business.

- **Measurable Resilience.** You stop building "silos of functionality" and start building cohesive systems. Because these patterns are embedded with observability and measurable success criteria, you aren't just guessing if your solution is secure or performant, you have the data to prove it.

## Why Experience Matters

If the philosophy sounds straightforward, the execution is where most teams hit the wall. Building a "Golden Path" isn't just about drafting documentation or choosing the right libraries; it is about navigating the human element. It involves untangling legacy requirements that no longer make sense, managing the cultural resistance to changing established ways of working, and bridging the often-wide gap between risk-averse stakeholders and delivery-focused engineers.

I have spent my career helping organisations move away from reactive, audit-heavy cultures toward this model of embedded design. I’ve seen firsthand how projects that used to stall for weeks due to compliance sign-offs can pivot to a "design-by-default" flow. The result is a significant reduction in lead time and—more importantly—a system that is objectively more robust and maintainable.

## Moving Forward

If your team is struggling to balance the weight of compliance with the speed of delivery, the answer isn’t more checklists or more manual oversight. It’s a change in your architectural foundations.

I specialise in helping organisations audit their current technical landscape, identify the points of highest friction, and build the "Golden Path" templates that allow your engineers to do their best work without the constant, draining tax of "checking the boxes."

If these challenges sound familiar to your current workflow, I’m always happy to chat about how other teams have successfully shifted their architectural patterns. You can find me over on [LinkedIn](https://www.linkedin.com/in/jessica-brentnall/), or feel free to drop me an email to discuss how we might start mapping your own path of least resistance.

_Benefit from preparation._

J.

---

<div style="text-align:center" markdown="1">
<img src="{{site.baseurl}}/images/postlogo.png" width="150" alt="Logo of JBRENTNALL DIGITAL, a company offering Architecture & Engineering Leadership on a contract basis">
</div>