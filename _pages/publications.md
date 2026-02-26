---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
classes: publications-page
---

{% assign pubs = site.publications | sort: "date" | reverse %}
{% for post in pubs %}
  {% include archive-single.html %}
{% endfor %}
