---
layout: post
title: "The shape of charge"
date: 2026-05-02
description: "A second look at the charging exponent c — why where the charge sits on a fractal island is more important than how big the island is."
tags: condensed-matter fractals percolation electrostatics
categories: explainer
giscus_comments: false
related_posts: true
related_publications:
  - yadava1989_electrostatic_charging_fractal_cluster
---

A companion deck to ["The hidden geometry of conduction in thin films"]({% post_url 2026-05-02-hidden-geometry-conduction-thin-films %}). The same 1989 paper {% cite yadava1989_electrostatic_charging_fractal_cluster %} is examined from a slightly different angle — focused on where charge actually accumulates on a fractal cluster, and why that geometric fact alone explains the "wandering" temperature exponent.

## Watch

<!-- TODO(media): replace YOUTUBE_VIDEO_ID with the unlisted/public ID for "The_Fractal_Secret.mp4" once uploaded. -->

{% include video.liquid path="https://www.youtube-nocookie.com/embed/YOUTUBE_VIDEO_ID" class="img-fluid rounded z-depth-1" width="100%" height="400" title="The fractal secret" %}

## Read

<object data="{{ '/assets/pdf/shape-of-charge.pdf' | relative_url }}" type="application/pdf" width="100%" height="600">
  <p>Your browser does not display embedded PDFs. <a href="{{ '/assets/pdf/shape-of-charge.pdf' | relative_url }}">Download the explainer (PDF)</a>.</p>
</object>

## A wandering exponent

{% include figure.liquid loading="lazy" path="assets/img/blog/shape-of-charge/page-02.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="The exponent x takes very different values in discontinuous films and cermets." %}

Discontinuous films give a temperature exponent $x \approx 1$. Cermets give $x = 1/2$. Same family of systems, very different numbers. The paper described the discontinuous-film case as "least understood so far" and asked whether anything tied the two limits together.

## The physics of the hop

{% include figure.liquid loading="lazy" path="assets/img/blog/shape-of-charge/page-03.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Thermally activated tunnelling between isolated metal islands; the barrier is the charging energy." %}

Conduction proceeds by thermally activated tunnelling between metallic islands. The barrier is the charging energy
$$E_c \;=\; \frac{e^{2}}{2C},$$
which depends entirely on the capacitance $C$ of an island.

## The flawed assumption

{% include figure.liquid loading="lazy" path="assets/img/blog/shape-of-charge/page-04.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="C ∝ r is correct for spheres and disks, but in gross error for the worm-like islands of discontinuous films." %}

Past work invariably assumed $C \propto r$, the linear scaling appropriate for _Euclidean_ islands. For the worm-like, ramified islands that actually appear in discontinuous films near percolation, that assumption is in gross error. The real question is geometric: **what is the actual shape of these islands?**

## Where the charge can — and cannot — sit

{% include figure.liquid loading="lazy" path="assets/img/blog/shape-of-charge/page-06.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="The deep invaginations of a fractal cluster are electrostatically shielded; only the unshielded perimeter carries charge." %}

When charge is placed on a fractal cluster, it does not coat the surface uniformly. The deep invaginations are electrostatically shielded, like the inside of a hollow sphere. Charge accumulates only on the _unshielded perimeter_ $t_u$, defined by the outward-extending tips and buds.

Assume $t_u$ is itself scaling,
$$t_u \;\propto\; r^{d_c},$$
where $d_c$ is a new "charging exponent" describing the _electrostatically active_ fraction of the boundary.

- For Euclidean shapes $d_c = d - 1$ (the whole boundary is active).
- For highly ramified fractals $d_c \to d - 2$ (most of the boundary is hidden inside shielded regions).

## A new capacitance law

{% include figure.liquid loading="lazy" path="assets/img/blog/shape-of-charge/page-08.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="The new capacitance scaling C ∝ r^c, with 0 < c < 1." %}

A polarisation argument gives
$$C \;\propto\; r^{c}, \qquad c \;=\; 2 - d + d_c,$$
with the crucial bound $0 < c < 1$. The capacitance no longer scales linearly with island size; it scales by a geometry-dependent exponent.

## From one cluster to the system

{% include figure.liquid loading="lazy" path="assets/img/blog/shape-of-charge/page-09.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Combining percolation, geometry, and the new charging-energy law produces D(E_c) ∝ E_c^{d/c − 1}." %}

Three ingredients combine:

1. percolation's cluster size distribution $N_s \propto s^{-\tau}$,
2. the size–radius relation $s \propto r^{d_f}$,
3. the new charging-energy law $E_c \propto 1/r^{c}$.

The result is a power-law density of charging states
$$D(E_c) \;\propto\; E_c^{\,d/c - 1},$$
which fed into the Mott hopping framework yields a single, clean formula:
$$\boxed{\, x \;=\; \frac{1}{1 + c} \,}$$
The temperature exponent is determined entirely by the cluster geometry.

## The two limits

{% include figure.liquid loading="lazy" path="assets/img/blog/shape-of-charge/page-13.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="One geometric exponent c interpolates between cermets (x = 1/2) and discontinuous films (x = 1)." %}

- **Cermets (Euclidean grains)**: $d_c \to d - 1 \Rightarrow c \to 1 \Rightarrow x = 1/2$.
- **Discontinuous films (ramified clusters)**: $d_c \to d - 2 \Rightarrow c \to 0 \Rightarrow x \to 1$.

The "wandering" of $x$ is not evidence of different physics. It is a direct reflection of the underlying cluster geometry — _geometry is destiny_.

## The story in three steps

{% include figure.liquid loading="lazy" path="assets/img/blog/shape-of-charge/page-14.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="The flaw, the insight, the unification — in one slide." %}

1. **The flaw.** $E_c \propto 1/r$ is wrong for the irregular, fractal shapes found in discontinuous films.
2. **The insight.** Most of a fractal's boundary is electrostatically shielded; what matters is the unshielded perimeter and its scaling exponent $c$, with $E_c \propto 1/r^{c}$ and $0 < c < 1$.
3. **The unification.** Combined with percolation theory this produces $x = 1/(1+c)$, recovering the full observed range from $1/2$ (cermets) to $1$ (discontinuous films) as a single geometric consequence.

The electrostatic properties of disordered systems are not set by size alone; they are set by the _effective unshielded geometry_ of the conducting clusters.
