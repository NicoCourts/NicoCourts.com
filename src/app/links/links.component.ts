import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  md: any
  hljs: any

  constructor() { 
    this.hljs = require('highlight.js')
    const mk = require('@iktakahiro/markdown-it-katex')
    this.md = require('markdown-it')({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function(str, lang) {
        if (lang && this.hljs.getLanguage(lang)) {
          try {
            return this.hljs.highlight(lang, str).value;
          } catch (__) {}
        }
      },
    })
    this.md.use(mk)
  }

  get_blurb_one() {
    var html1 = `<p>I was asked to participate in a reading group on the Grassmannian. My role was to describe the construction via smooth manifold theory of the Grassmannian as a quotient of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>G</mi><mi>L</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">GL(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">G</span><span class="mord mathdefault">L</span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span>. After motivating how we endow this set with a topology and smooth structure, I finish the discussion with a quick argument that this manifold is compact.</p>` +
      `<p>Along the way, I discovered that there had been a significant amount of work into recovering this classical geometric objects in the world of noncommutative algebraic geometry. Thus I dedicated the second half of my research to a paper of Taft and Towber in which they use the natural action of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>G</mi><mi>L</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">GL(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathdefault">G</span><span class="mord mathdefault">L</span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span> on <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi mathvariant="normal">Gr</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>k</mi><mo separator="true">,</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\operatorname{Gr}(k,n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">G</span><span class="mord mathrm">r</span></span><span class="mopen">(</span><span class="mord mathdefault" style="margin-right:0.03148em;">k</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span> and the quantized <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>G</mi><msub><mi>L</mi><mi>q</mi></msub><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">GL_q(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.036108em;vertical-align:-0.286108em;"></span><span class="mord mathdefault">G</span><span class="mord"><span class="mord mathdefault">L</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.15139200000000003em;"><span style="top:-2.5500000000000003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathdefault mtight" style="margin-right:0.03588em;">q</span></span></span></span><span class="vlist-s">&#8203;</span></span><span class="vlist-r"><span class="vlist" style="height:0.286108em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span> to construct a comodule which plays the role of a <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>q</mi></mrow><annotation encoding="application/x-tex">q</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.19444em;"></span><span class="mord mathdefault" style="margin-right:0.03588em;">q</span></span></span></span>-analog of <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi mathvariant="normal">Gr</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>k</mi><mo separator="true">,</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\operatorname{Gr}(k,n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">G</span><span class="mord mathrm">r</span></span><span class="mopen">(</span><span class="mord mathdefault" style="margin-right:0.03148em;">k</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.16666666666666666em;"></span><span class="mord mathdefault">n</span><span class="mclose">)</span></span></span></span></p>`
    document.getElementById('blurb1').innerHTML += html1
  }
  get_blurb_two() {
    var md2 = `This is the paper I prepared for my general exam (and subsequent masters degree). I began from the foundational work of Schur in his 1901 thesis
    on the representations of the group $GL_n(k)$ and his discovery of the connection to representations of the symmetric group $S_r$ via the so-called Schur-Weyl functor.
    From there, we generalize this theory to a statement about (polynomial) representations of the (affine) group scheme $GL_n$ over an arbitrary infinite field 
    and show how this representation theory is properly encoded in terms of the representations of Schur algebras $S(n,r)$.\n\n`+
    `We then discuss strict polynomial functors developed by Friedlander & Suslin as well as Krause and Aquilino & Reischuk. We catalog their efforts 
    towards establishing that the Schur-Weyl functor is monoidal under an appropriate monoidal structure on strict polynomial functors developed by Krause.\n\n`+
    `Finally we turn towards techniques of analyzing the representation theory of algebras and sketch a possible program for analyzing the structure 
    of the bounded derived category $D^b(S(p,p))$ for a prime $p$ over a field of characteristic $p$.`;
    var html2 = this.md.render(md2);
    document.getElementById('blurb2').innerHTML += html2;
  }
  ngOnInit() { 
    this.get_blurb_one()
    this.get_blurb_two()
   }

}
