---
layout: single
title: "Experience"
permalink: /experience/
author_profile: true
---

{% for role in site.data.experience %}
<div class="experience-entry">
  <p class="experience-title"><strong>{{ role.title }}</strong></p>
  <p class="experience-date">{{ role.dates }}</p>
  <ul class="experience-points">
  {% for point in role.points %}
    <li>{{ point }}</li>
  {% endfor %}
  </ul>
</div>

{% endfor %}
