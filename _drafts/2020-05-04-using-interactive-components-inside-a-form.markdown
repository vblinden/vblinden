---
layout: post
title: "Using interactive components inside a form"
date: 2020-05-04 09:43:37 +0200
categories: vue javascript
---

<div id="vue">
    <p>
        Message: {{ message }}
    </p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#vue',
        data: {
            message: 'Hello Jekyll!'
        },
    })
</script>