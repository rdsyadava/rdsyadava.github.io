---
layout: post
title: "The hidden geometry of conduction in thin films"
date: 2026-05-02
description: "How a fractal picture of the metallic islands resolves the long-standing puzzle of the temperature exponent x in discontinuous metal films and cermets."
tags: condensed-matter fractals percolation hopping
categories: explainer
giscus_comments: false
related_posts: true
related_publications:
  - yadava1989_electrostatic_charging_fractal_cluster
---

A plain-language walk-through of the 1989 _Letter_ in **J. Phys.: Condens. Matter** {% cite yadava1989_electrostatic_charging_fractal_cluster %} that proposed a new electrostatic scaling law for fractal metal clusters and used it to explain the range of temperature exponents seen in discontinuous metal films and cermets.

## Listen

<!-- TODO(media): replace YOUTUBE_VIDEO_ID with the unlisted/public ID for "Fractal Geometry Solves Metal Film Physics.m4a" once uploaded. -->

{% include video.liquid path="https://www.youtube-nocookie.com/embed/YOUTUBE_VIDEO_ID" class="img-fluid rounded z-depth-1" width="100%" height="400" title="Fractal geometry solves metal film physics" %}

## Read

<object data="{{ '/assets/pdf/hidden-geometry-conduction-thin-films.pdf' | relative_url }}" type="application/pdf" width="100%" height="600">
  <p>Your browser does not display embedded PDFs. <a href="{{ '/assets/pdf/hidden-geometry-conduction-thin-films.pdf' | relative_url }}">Download the explainer (PDF)</a>.</p>
</object>

## The puzzle

Below a critical thickness (≈ 100 Å), thin metal films are not continuous. They form a random distribution of isolated metallic _islands_. In the insulating regime, the DC conductivity follows
$$\sigma \propto \exp\bigl[-\bigl(T_0/T\bigr)^{x}\bigr],$$
but the temperature exponent $x$ is not universal:

- discontinuous films give $x \approx 1$,
- cermets (metal–insulator composites) give $x = 1/2$.

Why does $x$ wander between these values for systems that look superficially similar?

## The standard model and where it breaks

Conduction proceeds by thermally activated tunnelling between islands. The activation energy is the electrostatic charging energy
$$E_c \;=\; \frac{e^{2}}{2C},$$
so everything depends on the island capacitance $C$. The textbook assumption $C \propto r$ (linear in cluster radius) is correct for spheres and disks, but, as the paper argues, it is in _gross error_ for the tortuous, ramified shapes that actually form near the metal–insulator transition.

## The fractal insight

Near the percolation threshold the metal clusters are self-similar fractals. Two consequences matter.

1. **Shielding**. The deep "burrows" and "invaginations" of a fractal cluster are electrostatically shielded — much like the inside of a hollow conductor. Charge can only sit on the _unshielded perimeter_ $t_u$, the outermost tips and buds.
2. **A new scaling exponent**. If $t_u \propto r^{d_c}$, then $d_c$ is a new "charging exponent" set by the cluster geometry. For Euclidean shapes $d_c = d - 1$; for highly ramified fractals $d_c \to d - 2$.

A polarisation argument turns this into a capacitance scaling law
$$C \;\propto\; r^{c}, \qquad c = 2 - d + d_c,$$
with $0 < c < 1$ — no longer pinned to unity.

## From a single cluster to the macroscopic exponent

Combining percolation's cluster size distribution with the new charging-energy law gives the density of charging states
$$D(E_c) \;\propto\; E_c^{\,d/c - 1}.$$
Plugged into the Mott variable-range-hopping result $x = (n+1)/(n+d+1)$, the dimension drops out and the answer becomes geometry, not dimensionality:
$$\boxed{\, x \;=\; \frac{1}{1 + c} \,}$$

## Why the wandering exponent stops wandering

- **Cermets**: nearly Euclidean grains $\Rightarrow d_c \to d-1 \Rightarrow c \to 1 \Rightarrow x = 1/2$. ✓
- **Discontinuous films near percolation**: highly ramified clusters $\Rightarrow d_c \to d-2 \Rightarrow c \to 0 \Rightarrow x \to 1$. ✓

The two extreme experimental values, and everything in between, fall out of a single relation set by the _shape_ of the conducting clusters.

## What this paper changed

| Aspect              | Old picture        | New picture                     |
| ------------------- | ------------------ | ------------------------------- |
| Cluster geometry    | Regular, Euclidean | Ramified, fractal               |
| Capacitance scaling | $C \propto r$      | $C \propto r^{c}$               |
| Charging energy     | $E_c \propto 1/r$  | $E_c \propto 1/r^{c}$           |
| Predicting $x$      | Could not          | $x = 1/(1+c)$, with $0 < c < 1$ |

The work introduced the charging exponent $c$ as a new physical parameter, unified the conductivity behaviour of discontinuous films and cermets within a single framework, and showed that critical-phenomena ideas — percolation, fractals — have direct, quantitative consequences for transport in disordered metals.
