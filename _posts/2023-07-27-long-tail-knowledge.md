---
layout: publication
title: Large Language Models Struggle to Learn Long Tail Knowledge
subtitle: Nikhil Kandpal, <b>Haikang Deng</b>, Adam Roberts, Eric Wallace, Colin Raffel
thumbnail-img: /assets/img/long-tail.png
gh-repo: nkandpa2/long_tail_knowledge
gh-badge: [star, fork]
tags: [Large Language Model, Question Answering, Long-Tail Knowledge]
arxiv: https://arxiv.org/abs/2211.08411
pdf: https://arxiv.org/pdf/2211.08411.pdf
bibtex: "
@InProceedings{pmlr-v202-kandpal23a,
  title = 	 {Large Language Models Struggle to Learn Long-Tail Knowledge},
  author =       {Kandpal, Nikhil and Deng, Haikang and Roberts, Adam and Wallace, Eric and Raffel, Colin},
  booktitle = 	 {Proceedings of the 40th International Conference on Machine Learning},
  pages = 	 {15696--15707},
  year = 	 {2023},
  editor = 	 {Krause, Andreas and Brunskill, Emma and Cho, Kyunghyun and Engelhardt, Barbara and Sabato, Sivan and Scarlett, Jonathan},
  volume = 	 {202},
  series = 	 {Proceedings of Machine Learning Research},
  month = 	 {23--29 Jul},
  publisher =    {PMLR},
  pdf = 	 {https://proceedings.mlr.press/v202/kandpal23a/kandpal23a.pdf},
  url = 	 {https://proceedings.mlr.press/v202/kandpal23a.html},
  abstract = 	 {The Internet contains a wealth of knowledge—from the birthdays of historical figures to tutorials on how to code—all of which may be learned by language models. However, while certain pieces of information are ubiquitous on the web, others appear extremely rarely. In this paper, we study the relationship between the knowledge memorized by large language models and the information in pre-training datasets scraped from the web. In particular, we show that a language model’s ability to answer a fact-based question relates to how many documents associated with that question were seen during pre-training. We identify these relevant documents by entity linking pre-training datasets and counting documents that contain the same entities as a given question-answer pair. Our results demonstrate strong correlational and causal relationships between accuracy and relevant document count for numerous question answering datasets (e.g., TriviaQA), pre-training corpora (e.g., ROOTS), and model sizes (e.g., 176B parameters). Moreover, while larger models are better at learning long-tail knowledge, we estimate that today’s models must be scaled by many orders of magnitude to reach competitive QA performance on questions with little support in the pre-training data. Finally, we show that retrieval-augmentation can reduce the dependence on relevant pre-training information, presenting a promising approach for capturing the long-tail.}
}
"
venue: ICML, 2023, Honolulu, Hawaii
---

The Internet contains a wealth of knowledge -- from the birthdays of historical figures to tutorials on how to code -- all of which may be learned by language models. However, while certain pieces of information are ubiquitous on the web, others appear extremely rarely. In this paper, we study the relationship between the knowledge memorized by large language models and the information in pre-training datasets scraped from the web. In particular, we show that a language model's ability to answer a fact-based question relates to how many documents associated with that question were seen during pre-training. We identify these relevant documents by entity linking pre-training datasets and counting documents that contain the same entities as a given question-answer pair. Our results demonstrate strong correlational and causal relationships between accuracy and relevant document count for numerous question answering datasets (e.g., TriviaQA), pre-training corpora (e.g., ROOTS), and model sizes (e.g., 176B parameters). Moreover, while larger models are better at learning long-tail knowledge, we estimate that today's models must be scaled by many orders of magnitude to reach competitive QA performance on questions with little support in the pre-training data. Finally, we show that retrieval-augmentation can reduce the dependence on relevant pre-training information, presenting a promising approach for capturing the long-tail.

