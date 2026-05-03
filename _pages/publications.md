---
layout: page
permalink: /publications/
title: publications
description: Publications grouped by research theme. Click any entry to expand its BibTeX.
nav: true
nav_order: 1
---

{% include bib_search.liquid %}

<div class="publications">

## Book chapters

{% bibliography -f papers -q @incollection %}

## Condensed matter: disordered systems, fractals & 1/f noise

{% bibliography --query @*[keywords=condensed-matter]* %}

## MOS physics & low-frequency noise

{% bibliography --query @*[keywords=mos-noise]* %}

## SAW & MEMS/NEMS sensor physics

{% bibliography --query @*[keywords=saw-mems]* %}

## Electronic-nose data analytics & machine learning

{% bibliography --query @*[keywords=enose-ml]* %}

## Nonlinear dynamics, chaos & stochastic resonance

{% bibliography --query @*[keywords=nonlinear]* %}

## Soft matter & active microswimmers

{% bibliography --query @*[keywords=microswimmer]* %}

## Semiconductor materials & devices (HgCdTe, CdTe, IR sensors)

{% bibliography --query @*[keywords=hgcdte]* %}

## Radiation effects, ion implantation & laser–matter interaction

{% bibliography --query @*[keywords=radiation]* %}

## Sponsored research & technology development reports

{% bibliography --query @*[keywords=report]* %}

</div>
