---
layout: single
title: "Decoupling Task-Solving and Output Formatting in LLM Generation"
collection: publications
category: manuscripts
subtitle: <b>Haikang Deng</b>, Po-Nien Kung, Nanyun Peng
permalink: /publication/decoupling-task-solving-formatting
date: 2026-04-06
first_author: true
venue: ACL
recognition: Oral
arxiv: https://arxiv.org/abs/2510.03595
pdf: https://arxiv.org/pdf/2510.03595.pdf
---

Large language models (LLMs) are increasingly adept at solving complex problems, such as mathematical reasoning and automatic evaluation. However, performance often degrades when prompts intertwine task instructions with rigid formatting requirements. This entanglement creates competing goals for the model, hindering its reasoning capabilities. To address this, we introduce Deco-G, a decoding framework that explicitly decouples format adherence from problem solving. Deco-G delegates format adherence to a separate Format Estimation Module (FEM), which performs probabilistic lookahead to estimate future format compliance rate and reweighs token probabilities, allowing the LLM to focus solely on task resolution. To make this approach both practical and efficient, we introduce three key innovations: instruction-aware distillation, a flexible trie-building algorithm, and HMM state pruning. Experiments across mathematical reasoning, event argument extraction, and LLM-as-a-judge demonstrate that Deco-G constantly gains over prompting or structured generation baselines, with guaranteed format compliance.
