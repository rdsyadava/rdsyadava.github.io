---
layout: post
title: "Fractals solve semiconductor puzzles"
date: 2026-05-02
description: "A fractal lens reframes two decades-old MOS device problems — anomalous defect-density area dependence and the persistent 1/f noise spectrum — as two faces of one geometric fact."
tags: condensed-matter mos-physics fractals 1f-noise dielectric-breakdown
categories: explainer
giscus_comments: false
related_posts: true
related_publications:
  - yadava1989_searching_fractal_basis_mosfets
  - yadava1989_fractal_defect_clustering_gate_oxides
  - yadava1989_scaling_oxide_defects_breakdown
---

A plain-language walk-through of three 1989 papers in **Jpn. J. Appl. Phys.** {% cite yadava1989_searching_fractal_basis_mosfets %}, **J. Electrochem. Soc.** {% cite yadava1989_fractal_defect_clustering_gate_oxides %} and **Appl. Phys. Lett.** {% cite yadava1989_scaling_oxide_defects_breakdown %} that together argued for a fractal description of gate-oxide defects and the Si–SiO₂ interface, and showed that this single picture covers both dielectric breakdown statistics and 1/f noise.

## Watch

<!-- TODO(media): replace YOUTUBE_VIDEO_ID with the unlisted/public ID for "The_Universe_s_Secret_Hum.mp4" once uploaded. -->

{% include video.liquid path="https://www.youtube-nocookie.com/embed/YOUTUBE_VIDEO_ID" class="img-fluid rounded z-depth-1" width="100%" height="400" title="The universe's secret hum" %}

## Read

<object data="{{ '/assets/pdf/fractals-solve-semiconductor-puzzles.pdf' | relative_url }}" type="application/pdf" width="100%" height="600">
  <p>Your browser does not display embedded PDFs. <a href="{{ '/assets/pdf/fractals-solve-semiconductor-puzzles.pdf' | relative_url }}">Download the explainer (PDF)</a>.</p>
</object>

## Two enigmas, one device

For decades, two phenomena dogged MOS reliability and performance:

1. **Dielectric breakdown** of the gate oxide — categorised as "intrinsic" or "defect-related" but with a statistical signature that classical Poisson models could not reproduce.
2. **1/f (flicker) noise** — universal, low-frequency, and hotly contested in origin, with no single physical theory accepted across devices and processes.

The argument here: both are signatures of the same underlying fact — _the geometry of imperfection in MOS devices is fractal_.

## The clue in the breakdown data

The conventional view assumed defects in the gate oxide were Poisson-random. That predicts a defect density $D$ independent of capacitor area $A$. Experimentally, however, plotting $D$ versus $A$ on log–log gives a straight line — a clear power law,
$$D(A) \;\propto\; A^{(Q-2)/2},$$
across multiple independent datasets (Wolters & Van der Schoot, Osburn & Ormond, Chan & Waggener). A straight log–log line is a fingerprint of a fractal cluster, not a random distribution. Independent measurements gave $Q$ values of $1.5$, $0.8$, and $0.2$ — all firmly below the $Q = 2$ that random distributions would require.

## A "trema-fractal" oxide

Treat the oxide as a sheet and defects as cut-outs ("tremas"). The defect-free remainder is a _trema-fractal_ — a Mandelbrot construction whose properties are set by the size distribution of the cut-outs.

Two physically motivated postulates suffice:

1. **Defect size distribution**. The number of defects larger than $a$ follows a power law: $N(\mathrm{size} > a) \propto a^{-\gamma}$.
2. **Strength vs. size**. The local breakdown strength is logarithmic in defect size: $E \propto -\ln(a)$ — larger defects fail at lower fields.

These two assumptions, one geometric and one physical, derive the empirically observed extreme-value distribution for defect-related breakdown,
$$D(E) \;=\; D_0\,\exp(bE),$$
from first principles. The model only makes sense for $\gamma < 1$, which leaves a connected, robust defect-free region — a Swiss-cheese topology rather than a dust of disconnected islands.

## A fractal interface, and the origin of 1/f

Standard 1/f-noise theories (e.g. McWhorter) assume a uniform distribution of trapping time constants and bolt the 1/f spectrum on with an ad-hoc weighting. The fractal proposal flips this: model the Si–SiO₂ interface itself as a fractal — a Sierpiński-carpet-like structure with patches of different potential at every length scale.

- The fractal dimension $d$ obeys $d = \ln(b^{2}-c)/\ln(b)$, with $1 < d < 2$.
- Each scale of patches contributes its own admittance and time constant.
- Summing over all scales gives a geometric series whose power spectrum is
  $$S(\omega) \;\propto\; 1/\omega^{\alpha},$$
  with $\alpha$ derived from $d$, not assumed.

For $d \to 2$ (a coarse, nearly space-filling interface), $\alpha \to 1$. For $d \to 1$ (a smoother, line-like interface), $\alpha$ deviates from $1$. The well-known experimental observation that flicker exponents are _close to but not exactly_ $1$ is, in this picture, a direct readout of interface fractality.

## One concept, two phenomena

| Phenomenon              | Random model                                | Fractal model                            |
| ----------------------- | ------------------------------------------- | ---------------------------------------- |
| Defect-density vs. area | constant (predicted)                        | power law with $Q < 2$ (observed)        |
| Breakdown statistics    | strained extreme-value fit                  | derived from $\gamma < 1$ trema-fractal  |
| 1/f noise spectrum      | requires assumed time-constant distribution | derived from interface fractal dimension |

The fractal dimensions $Q$, $d$, and $\gamma$ are not abstractions — they are _process-dependent_ and reflect oxide growth conditions, contamination, and thermal processing. Reliability engineering then becomes a problem of controlling process-induced fractality: engineer smoother interfaces and less clustered defect distributions.

## What the work changed

It moved the discussion from statistics to physics: not just _what_ the distributions are, but _why_ they take the form they do. And it offered a single geometric concept — fractality of the imperfections — as the common physical basis for two phenomena that had been treated as unrelated for decades.
