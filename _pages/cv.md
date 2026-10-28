---
layout: single
title: ""
permalink: /cv/
author_profile: false
---

{% capture resume_url %}{{ '/files/Resume.pdf' | relative_url }}?v={{ site.time | date: '%s' }}{% endcapture %}

<div style="text-align: center; margin-top: 24px;">
  <p><a href="{{ resume_url }}" download="Haikang_Deng_Resume.pdf">Download PDF</a></p>
  <iframe src="{{ resume_url }}" title="Haikang Deng's resume" scrolling="no" width="850px" height="1130px" style="width: 100%; max-width: 850px;" frameborder="0"></iframe>
</div>
