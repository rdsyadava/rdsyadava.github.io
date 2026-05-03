---
layout: post
title: "Fractals unify noise and breakdown"
date: 2026-05-02
description: "A second look at why dielectric breakdown statistics and 1/f noise in MOS devices share a single physical origin — the fractal geometry of oxide defects and the Si–SiO₂ interface."
tags: condensed-matter mos-physics fractals 1f-noise dielectric-breakdown
categories: explainer
giscus_comments: false
related_posts: true
related_publications:
  - yadava1989_searching_fractal_basis_mosfets
  - yadava1989_fractal_defect_clustering_gate_oxides
  - yadava1989_scaling_oxide_defects_breakdown
---

A companion deck to ["Fractals solve semiconductor puzzles"]({% post_url 2026-05-02-fractals-solve-semiconductor-puzzles %}) — the same body of work {% cite yadava1989_searching_fractal_basis_mosfets %}{% cite yadava1989_fractal_defect_clustering_gate_oxides %}{% cite yadava1989_scaling_oxide_defects_breakdown %}, framed around the unifying claim: _catastrophic failure and pervasive noise are two faces of one geometry_.

## Watch

<!-- TODO(media): replace YOUTUBE_VIDEO_ID with the unlisted/public ID for "Unified Theory of Flicker Noise.mp4" once uploaded. -->

{% include video.liquid path="https://www.youtube-nocookie.com/embed/YOUTUBE_VIDEO_ID" class="img-fluid rounded z-depth-1" width="100%" height="400" title="Unified theory of flicker noise" %}

## Read

<object data="{{ '/assets/pdf/fractals-unify-noise-and-breakdown.pdf' | relative_url }}" type="application/pdf" width="100%" height="600">
  <p>Your browser does not display embedded PDFs. <a href="{{ '/assets/pdf/fractals-unify-noise-and-breakdown.pdf' | relative_url }}">Download the explainer (PDF)</a>.</p>
</object>

## Two puzzles, treated as separate problems

{% include figure.liquid loading="lazy" path="assets/img/blog/fractals-unify-noise-and-breakdown/page-02.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Erratic breakdown and pervasive 1/f noise — historically treated as separate problems with distinct physical models." %}

In the 1980s, two of the most persistent challenges in MOS device physics were treated as unrelated:

- **Erratic dielectric breakdown.** Why do nominally identical capacitors fail at such a wide distribution of fields? Poisson defect models could not reproduce the observed statistics.
- **1/f flicker noise.** Why does this specific spectral shape appear so consistently across devices and materials, with no single accepted physical basis?

The proposal: a common geometric origin — the _fractality_ of imperfections in processed silicon.

## The first clue: defect density depends on area

{% include figure.liquid loading="lazy" path="assets/img/blog/fractals-unify-noise-and-breakdown/page-03.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Defect density vs. capacitor area, plotted from independent published datasets — a clean power law, not Poisson noise." %}

The standard Poisson model says: average defect density is a property of the wafer, independent of the test capacitor area $A$. The experimental data — Wolters & Van der Schoot, Osburn & Ormond, Chan & Waggener — show a tidy power law:
$$D(A) \;\propto\; A^{-k}, \qquad k = (2-Q)/2.$$
Random distributions require $Q = 2$ ($k = 0$). Real measurements give $Q = 1.5$, $0.8$, $0.2$ — significant deviation in the same direction across independent groups. This isn't measurement noise; it's the fingerprint of a non-random, fractal-clustered system.

{% include figure.liquid loading="lazy" path="assets/img/blog/fractals-unify-noise-and-breakdown/page-04.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="A power-law D(A) is the geometric signature of a fractal cluster of defects." %}

## A physical model for breakdown

{% include figure.liquid loading="lazy" path="assets/img/blog/fractals-unify-noise-and-breakdown/page-05.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Two assumptions — a power-law defect-size distribution and a logarithmic strength-vs-size law — derive the observed extreme-value breakdown statistics from first principles." %}

Two assumptions, one geometric and one physical, are enough.

1. **Defect size scaling**: $N(\mathrm{size} > a) \propto a^{-\gamma}$.
2. **Local strength vs. size**: $E \propto -\ln(a) + K$ — larger defects fail earlier.

From these, the experimentally observed extreme-value distribution
$$D(E) \;=\; D_0\,\exp(bE)$$
follows by direct calculation. Picturing the oxide film as a sheet with defects cut out as "tremas," the surviving defect-free region is a _trema-fractal_. Self-consistency rules out $\gamma \geq 1$ — the only physically admissible regime is $\gamma < 1$, giving a connected, defect-free Swiss-cheese.

## The second puzzle, the same geometry

{% include figure.liquid loading="lazy" path="assets/img/blog/fractals-unify-noise-and-breakdown/page-08.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="From randomly distributed traps to a self-similar interface: the new hypothesis for 1/f noise." %}

If fractality describes bulk oxide defects, can the _interface_ be fractal too? The hypothesis: the Si–SiO₂ interface — the inhomogeneous distribution of fixed charges, potential fluctuations, surface roughness — is geometrically self-similar across a range of scales.

{% include figure.liquid loading="lazy" path="assets/img/blog/fractals-unify-noise-and-breakdown/page-09.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="The Sierpiński-carpet model of the Si–SiO₂ interface: a hierarchy of patches with their own admittances and time constants." %}

Modelled as a Sierpiński-carpet–like fractal of dimension $d \in (1, 2)$, each construction stage contributes patches with their own admittance $Y(\omega)$ and characteristic time. The total admittance is a _geometric series_ in stage index, and the resulting noise power spectrum becomes
$$S(\omega) \;\propto\; 1/\omega^{\alpha},$$
with $\alpha$ derived from the interface fractal dimension $d$ — not posited. As $d \to 2$, $\alpha \to 1$. As $d$ moves away from 2, $\alpha$ deviates accordingly.

This is the testable claim: deviations of measured flicker exponents from exactly $1$ are not noise on a noise theory — they are direct readouts of how rough or clustered a particular interface actually is. The paper proposes calling such spectra "fractal $1/f^{\alpha}$ noise" to make the geometric origin explicit.

## One geometry, two phenomena

{% include figure.liquid loading="lazy" path="assets/img/blog/fractals-unify-noise-and-breakdown/page-11.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="One concept — fractal geometry — explains both dielectric breakdown statistics and the 1/f noise spectrum." %}

|                 | Dielectric breakdown              | 1/f flicker noise                                              |
| --------------- | --------------------------------- | -------------------------------------------------------------- |
| Old picture     | Poisson defects                   | uniform trap time-constants                                    |
| New picture     | trema-fractal oxide               | fractal Si–SiO₂ interface                                      |
| Key parameter   | $\gamma < 1$ defect-size exponent | interface dimension $d \in (1,2)$                              |
| Observable      | $D(A) \propto A^{-(2-Q)/2}$       | $S(\omega) \propto \omega^{-\alpha}$ with $\alpha = \alpha(d)$ |
| What it derives | extreme-value $D(E)$              | the 1/f spectrum itself                                        |

## Why it matters

Two implications followed.

- **Statistics → physics.** The model answers not just _what_ the empirical distributions are but _why_ they take that form, replacing fitted exponents with derived ones tied to a measurable geometric object.
- **Process → reliability.** The fractal dimensions $Q$, $d$, $\gamma$ are process-dependent. Improving reliability becomes the engineering problem of _controlling_ fractality — smoother interfaces, less clustered defect distributions, processing recipes whose targets are geometric rather than purely chemical.

The hidden order, on this account, was there all along — written in the language of fractal geometry.
