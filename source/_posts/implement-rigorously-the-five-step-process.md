---
extends: _layouts.post
title: "Implement Rigorously: The Five Step Process"
author: vblinden
date: 2021-09-25
section: content
---

I have always been a fan of Elon Musk and his philosophy of continuously improving products by recursively iterating. In
one of the videos made by Everyday Astronaut (see video at end of post) he gives a tour of the SpaceX facilities and in
some parts of the video he elaborates the method he is using at SpaceX to build a new iteration of Starship every couple
of weeks. He calls this "Implement Rigorously". I have taken the liberty to write down these five steps (paraphrasing
his words).

#### Step 1: Make your requirements less dumb

Your requirements are definitely dumb. It does not matter who gave them to you. It is particularly dangerous if a smart
person gave you the requirements, because you might not question them enough. Everyone is wrong. No matter who you are,
everyone is wrong some of the time. All designs are wrong, it’s just a matter of how wrong.

Each requirement needs to come with a name, not a department. Because you can't ask the departments, you have to ask a
person. The person also must take responsibility for that requirement. Otherwise you could have a requirement that an
intern randomly came up with two years ago and they are not even at the company anymore.

#### Step 2: Delete the part or process

If you are not occasionally adding things back in, you are not deleting enough. The bias tends to be very strongly
towards: "Let's add this part or process in case we need it". But you can have arguments for so many things. Things can
always be added later. If you are not adding things back 10% of the time, you're clearly not deleting enough. Just
delete it.

#### Step 3: Simplify or optimize

It is possibly the most common error of a smart engineer to optimize a thing that should not exist. Everyone is trained
in high school and college to always answer the question. You can't tell your professor his question is dumb, because
you will get a bad grade. You always have to answer the question. So everyone has a mental straight jacket on without
knowing it and they'll work on optimizing the thing that simply shouldn't exist in the first place.

#### Step 4: Accelerate cycle time

You're moving too slowly, go faster. But don't go faster before you have worked on the other three things (requirements,
deleting and simplifying) first. For example, if you're digging your grave, don't dig it faster, stop digging your
grave. Then look for things that can go faster. You can always make things go faster.

#### Step 5: Automate

The last step is automating the design or process as much as possible. An important part of this is to remove in-process
testing after the problems have been diagnosed; if a product is reaching the end of a production line with a high
acceptance rate, there is no need for in-process testing.

I recommend you watch the whole video (and series). It gives very useful insights in how Elon Musk is leading SpaceX (
and Tesla) in iterating as much as possible and getting so much stuff done.

<div class="relative">
  <iframe class="mx-auto mb-4 absolute inset-0 w-full h-full" width="560" height="315" src="https://www.youtube-nocookie.com/embed/t705r8ICkRw?start=808" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
