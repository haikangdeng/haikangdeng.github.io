---
layout: single
title: "LeanNav: Proof-Guided Search over the Lean Library Graph"
permalink: /publication/leannav
author_profile: false
description: "LeanNav uses Mathlib's dependency graph and the current proof context to find lemmas for formal theorem proving in Lean."
---

**Haikang Deng**, Jia-Chen Gu, Yuxuan Lu, Di Wu, Yihan Xu, Weichen Winston Yin, Junyi Zhang, Nanyun Peng

*Poster · Work in progress*

## Overview

When a prover gets stuck in Lean, it needs to find a lemma in Mathlib that fits its next proof step. LeanNav starts with a text query and follows shared dependencies to find related lemmas. It then uses the current proof context to rank the candidates by how well they fit that step. In the interactive version, the prover can inspect candidates and use what it learns to decide where to search next.

{% if page.pdf %}
[Download the paper (PDF)]({{ page.pdf | relative_url }})
{% else %}
The paper is in preparation. The PDF will be available on this page.
{% endif %}
