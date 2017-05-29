---
layout: page
title: Linux Kategorisi
permalink: /kategori/Linux
sitemap: false
---

<div id="index">

{% for category in categories %}
<a name="{{ Linux }}"></a><h2>{{ Linux | replace:'-', ' ' }} ({{ category | last | size }}) </h2>
{% assign sorted_posts = site.posts | sort: 'title' %}
{% for post in sorted_posts %}
{%if post.categories contains Linux%}

<h3><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">{{ post.title }} <p class="date">{{ post.date |  date: "%B %e, %Y" }}</p></a></h3>
<p>{{ post.excerpt | strip_html | truncate: 160 }}</p>

{%endif%}
{% endfor %}

{% endfor %}
</div>
