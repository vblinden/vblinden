---
extends: _layouts.post
title: Retrieve submodules with Git
author: vblinden
date: 2019-11-08
section: content
---

Yesterday I had a really hard time with pulling in a submodule from an old git repository I had laying around. I thought
a quick Google with DuckDuckGo would solve all my problems, but alas. There was a lot of outdated information that
simply didn’t work with the Git version I had installed on my computer (or maybe I just applied it incorrectly).

Finally I found an <a href="https://stackoverflow.com/a/44692935" target="_blank"> answer </a> on StackOverflow that
didn't quite work, but send me in the right direction. Eventually I gave up the DuckDuckGoing and did what I should have
done in the first place: Look at the <a href="https://git-scm.com/docs/git-submodule" target="_blank"> Git
documentation </a> for the submodule command.

The command I ran (from the root of my git folder) that worked for me after I cloned my repository was:

```shell
git submodule update --init --recursive
```

Lesson learned: If there is documentation available, consult that first.
