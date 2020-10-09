---
title: blog
tags: ['menu']
---

# blog
## this is
### a blog
#### yep
##### yep
###### yep
tags: {{tags}}


## Latest blog posts

{% for blog in collections.blog %}

- [{{blog.data.title}}]({{blog.url}})

{% endfor %}