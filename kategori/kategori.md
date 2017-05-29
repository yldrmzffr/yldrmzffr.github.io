---
layout: page
title: Kategoriler
permalink: /kategori/
sitemap: false
---
    
<div>
{% assign categories = site.categories | sort %}
{% for category in categories %}
<span class="site-tag">
    <a href="{{ category | first | slugify }}">
        {{ category[0] | replace:'-', ' ' }} ({{ category | last | size }})
    </a>
</span>
<br>
{% endfor %}
</div>
