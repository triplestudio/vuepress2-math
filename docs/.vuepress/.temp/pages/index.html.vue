<template><div><h1 id="数学试题记录站点" tabindex="-1"><a class="header-anchor" href="#数学试题记录站点"><span>数学试题记录站点</span></a></h1>
<p>欢迎来到数学试题记录站点！这里是我记录和整理数学试题的地方。</p>
<h2 id="站点特点" tabindex="-1"><a class="header-anchor" href="#站点特点"><span>站点特点</span></a></h2>
<p>该站点是使用 VuePress 2.0.0-rc.26，和 @mdit/plugin-katex（数学公式渲染组件）构建的一个用于方便记录和整理数学试题的基础版本。以此为基础，可以方便的用于数学试题的记录和整理。</p>
<p><a href="https://mp.weixin.qq.com/s/wKkbSON0vDYy1qAGKPi2Tw" target="_blank" rel="noopener noreferrer">VuePress 站点制作可参考</a></p>
<h2 id="站点功能" tabindex="-1"><a class="header-anchor" href="#站点功能"><span>站点功能</span></a></h2>
<ul>
<li>📚 数学试题收集与整理</li>
<li>🧮 支持数学公式渲染</li>
<li>🔍 试题分类与索引</li>
<li>💡 详细解答过程</li>
</ul>
<h2 id="快速导航" tabindex="-1"><a class="header-anchor" href="#快速导航"><span>快速导航</span></a></h2>
<ul>
<li><RouteLink to="/">首页</RouteLink></li>
<li><RouteLink to="/problems/">我的试题</RouteLink></li>
</ul>
<h2 id="数学公式示例" tabindex="-1"><a class="header-anchor" href="#数学公式示例"><span>数学公式示例</span></a></h2>
<p>这是一个行内公式：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E = mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></p>
<p>这是一个块级公式：</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mi mathvariant="normal">∞</mi></msubsup><msup><mi>e</mi><mrow><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mi>π</mi></msqrt></mrow><annotation encoding="application/x-tex">\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.3846em;vertical-align:-0.9703em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4143em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.8129em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9703em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.0369em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8913em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1908em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8492em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span></span></span><span style="top:-2.8092em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1908em;"><span></span></span></span></span></span></span></span></span></span></p>
<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2>
<ol>
<li>在&quot;我的试题&quot;中查看试题清单</li>
<li>点击试题标题查看详细内容</li>
<li>所有试题都支持数学公式渲染</li>
</ol>
<hr>
<p><em>最后更新：2025年</em></p>
</div></template>


