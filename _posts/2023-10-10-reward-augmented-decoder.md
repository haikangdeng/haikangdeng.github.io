---
layout: publication
title: "Reward-Augmented Decoding: Efficient Controlled Text Generation With a Unidirectional Reward Model"
subtitle: <b>Haikang Deng</b>, Colin Raffel
thumbnail-img: /assets/img/rad.png
gh-repo: haikangdeng/RAD
gh-badge: [star, fork]
tags: [LLM, Reward Model, Text Generation]
arxiv: https://arxiv.org/abs/2310.09520
pdf: https://arxiv.org/pdf/2310.09520.pdf
bibtex: "
@misc{deng2023rewardaugmented,
  title={Reward-Augmented Decoding: Efficient Controlled Text Generation With a Unidirectional Reward Model}, 
  uthor={Haikang Deng and Colin Raffel},
  year={2023},
  eprint={2310.09520},
  archivePrefix={arXiv},
  primaryClass={cs.CL}
}
"
venue: EMNLP, 2023, Singapore
---

While large language models have proven effective in a huge range of downstream applications, they often generate text that is problematic or lacks a desired attribute. In this paper, we introduce Reward-Augmented Decoding (RAD), a text generation procedure that uses a small unidirectional reward model to encourage a language model to generate text that has certain properties. Specifically, RAD uses the reward model to score generations as they are produced and rescales sampling probabilities to favor high-reward tokens. By using a unidirectional reward model, RAD can cache activations from prior generation steps to decrease computational overhead. Through experiments on generating non-toxic and sentiment-controlled text, we demonstrate that RAD performs best among methods that change only the generation procedure and matches the performance of state-of-the-art methods that involve re-training the language model. We further validate that RAD is effective on very large language models while incurring a minimal computational overhead.
