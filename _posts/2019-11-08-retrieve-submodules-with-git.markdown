---
layout: post
title: "Retrieve submodules with Git"
date: 2019-11-08 17:06:13 +0200
categories: git submodules
---

Yesterday I had a really difficult time with pulling in a submodule from an old git repository I had laying around. I thought a quick ~~Google~~ DuckDuckGo search would solve all my problems, but alas. There was a lot of outdated information that simply didn't work with the Git version I had installed on my computer (or I applied incorrectly).

Finally I found a answer on StackOverflow[^1] that put me in the right direction, but that also didn't work. Eventually I gave up and did what I should have done in the first place: Look at the Git documentation for the submodule command[^2].

The command I ran (from the root of my git folder) that worked for me after I cloned my repository was:  
{% highlight bash %}
git submodule update --init --recursive
{% endhighlight %}

Lesson learned: If there is documentation available, consult that first.

[^1]: https://stackoverflow.com/a/44692935
[^2]: https://git-scm.com/docs/git-submodule




