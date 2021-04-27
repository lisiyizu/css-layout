webpackJsonp([76113469359673],{536:function(n,a){n.exports={pathContext:{frontmatter:{path:"/getting-started/standalone",title:"Standalone",hasPlayground:!1,initialPlayground:null,redirect:null},html:'<h1>Standalone</h1>\n<p>Adding Yoga to a project is as simple as adding the dependency to your package manager of choice.</p>\n<h3>Android</h3>\n<div class="gatsby-highlight" data-language="groovy">\n      <pre class="language-groovy"><code class="language-groovy">dependencies <span class="token punctuation">{</span>\n\tcompile <span class="token string">\'com.facebook.yoga.android:yoga-layout:x.x.x\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>Javascript</h3>\n<p>The JavaScript bindings for Yoga can be used from node.js and within the browser.\nWhen using Yoga from node.js the native library is used, in browsers a pure JS\nversion is used (cross-compiled using <a href="http://kripken.github.io/emscripten-site/">emscripten</a>).</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$&gt; yarn add yoga-layout</code></pre>\n      </div>\n<p>This is an example on how to use Yoga in JavaScript, for a full API reference,\nhave a look at the <a href="https://github.com/facebook/yoga/blob/master/javascript/sources/entry-common.js#L123">flow-type definitions</a>.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> yoga<span class="token punctuation">,</span> <span class="token punctuation">{</span>Node<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'yoga-layout\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> root <span class="token operator">=</span> Node<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nroot<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nroot<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nroot<span class="token punctuation">.</span><span class="token function">setJustifyContent</span><span class="token punctuation">(</span>yoga<span class="token punctuation">.</span><span class="token constant">JUSTIFY_CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> node1 <span class="token operator">=</span> Node<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nnode1<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nnode1<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> node2 <span class="token operator">=</span> Node<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nnode2<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nnode2<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nroot<span class="token punctuation">.</span><span class="token function">insertChild</span><span class="token punctuation">(</span>node1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nroot<span class="token punctuation">.</span><span class="token function">insertChild</span><span class="token punctuation">(</span>node2<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nroot<span class="token punctuation">.</span><span class="token function">calculateLayout</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> yoga<span class="token punctuation">.</span><span class="token constant">DIRECTION_LTR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span><span class="token function">getComputedLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// {left: 0, top: 0, width: 500, height: 300}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node1<span class="token punctuation">.</span><span class="token function">getComputedLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// {left: 150, top: 0, width: 100, height: 100}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node2<span class="token punctuation">.</span><span class="token function">getComputedLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// {left: 250, top: 0, width: 100, height: 100}</span></code></pre>\n      </div>\n<h3>iOS</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">pod &#39;YogaKit&#39;, &#39;~&gt; 1.7&#39;</code></pre>\n      </div>\n<h2>Including Yoga From Source</h2>\n<p>If you plan to include Yoga from Source in a C++ project then all you have to do is inlude\nthe top level <code class="language-text">yoga</code> folder. Make sure to look at the top level <code class="language-text">BUCK</code> file to ensure you build\nusing the same compiler flags.</p>'}}}});
//# sourceMappingURL=path---getting-started-standalone-f155e750228fa2a9aff5.js.map