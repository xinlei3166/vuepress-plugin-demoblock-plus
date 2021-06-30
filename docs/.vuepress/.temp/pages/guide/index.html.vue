<template><h1 id="card" tabindex="-1">Card</h1>
<p>常用的卡片布局。</p>
<h2 id="基础用法" tabindex="-1">基础用法</h2>
<p>基础的卡片用法。</p>
<demo sourceCode="&lt;template&gt;
  &lt;div class=&quot;card-wrap&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;{{ title }}&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const title = ref('vitepress-theme-demoblock')

    return { title }
  }
})
&lt;/script&gt;

&lt;style&gt;
.card-wrap {
  text-align: center;
}

.card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: var(--c-brand);
  background: var(--c-bg);
  border: 1px solid var(--c-brand);
  height: 80px;
  width: 600px;
}
&lt;/style&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #fff"><code><span class="line"><span style="color: #24292E">&lt;</span><span style="color: #22863A">template</span><span style="color: #24292E">&gt;</span></span>
<span class="line"><span style="color: #24292E">  &lt;</span><span style="color: #6F42C1">div</span><span style="color: #24292E"> </span><span style="color: #6F42C1">class</span><span style="color: #24292E">=</span><span style="color: #032F62">&quot;card-wrap&quot;</span><span style="color: #24292E">&gt;</span></span>
<span class="line"><span style="color: #24292E">    &lt;</span><span style="color: #6F42C1">div</span><span style="color: #24292E"> </span><span style="color: #6F42C1">class</span><span style="color: #24292E">=</span><span style="color: #032F62">&quot;card&quot;</span><span style="color: #24292E">&gt;{{ </span><span style="color: #6F42C1">title</span><span style="color: #24292E"> }}&lt;/</span><span style="color: #6F42C1">div</span><span style="color: #24292E">&gt;</span></span>
<span class="line"><span style="color: #24292E">  &lt;/</span><span style="color: #6F42C1">div</span><span style="color: #24292E">&gt;</span></span>
<span class="line"><span style="color: #24292E">&lt;/</span><span style="color: #22863A">template</span><span style="color: #24292E">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292E">&lt;</span><span style="color: #22863A">script</span><span style="color: #24292E">&gt;</span></span>
<span class="line"><span style="color: #D73A49">import</span><span style="color: #24292E"> { ref, defineComponent } </span><span style="color: #D73A49">from</span><span style="color: #24292E"> </span><span style="color: #032F62">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D73A49">export</span><span style="color: #24292E"> </span><span style="color: #D73A49">default</span><span style="color: #24292E"> </span><span style="color: #6F42C1">defineComponent</span><span style="color: #24292E">({</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #6F42C1">setup</span><span style="color: #24292E">() {</span></span>
<span class="line"><span style="color: #24292E">    </span><span style="color: #D73A49">const</span><span style="color: #24292E"> </span><span style="color: #005CC5">title</span><span style="color: #24292E"> </span><span style="color: #D73A49">=</span><span style="color: #24292E"> </span><span style="color: #6F42C1">ref</span><span style="color: #24292E">(</span><span style="color: #032F62">&#39;vitepress-theme-demoblock&#39;</span><span style="color: #24292E">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292E">    </span><span style="color: #D73A49">return</span><span style="color: #24292E"> { title }</span></span>
<span class="line"><span style="color: #24292E">  }</span></span>
<span class="line"><span style="color: #24292E">})</span></span>
<span class="line"><span style="color: #24292E">&lt;/</span><span style="color: #22863A">script</span><span style="color: #24292E">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292E">&lt;</span><span style="color: #22863A">style</span><span style="color: #24292E">&gt;</span></span>
<span class="line"><span style="color: #6F42C1">.card-wrap</span><span style="color: #24292E"> {</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">text-align</span><span style="color: #24292E">: </span><span style="color: #005CC5">center</span><span style="color: #24292E">;</span></span>
<span class="line"><span style="color: #24292E">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #6F42C1">.card</span><span style="color: #24292E"> {</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">display</span><span style="color: #24292E">: </span><span style="color: #005CC5">inline-flex</span><span style="color: #24292E">;</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">align-items</span><span style="color: #24292E">: </span><span style="color: #005CC5">center</span><span style="color: #24292E">;</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">justify-content</span><span style="color: #24292E">: </span><span style="color: #005CC5">center</span><span style="color: #24292E">;</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">font-size</span><span style="color: #24292E">: </span><span style="color: #005CC5">18</span><span style="color: #D73A49">px</span><span style="color: #24292E">;</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">font-weight</span><span style="color: #24292E">: </span><span style="color: #005CC5">500</span><span style="color: #24292E">;</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">color</span><span style="color: #24292E">: </span><span style="color: #005CC5">var</span><span style="color: #24292E">(</span><span style="color: #E36209">--c-brand</span><span style="color: #24292E">);</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">background</span><span style="color: #24292E">: </span><span style="color: #005CC5">var</span><span style="color: #24292E">(</span><span style="color: #E36209">--c-bg</span><span style="color: #24292E">);</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">border</span><span style="color: #24292E">: </span><span style="color: #005CC5">1</span><span style="color: #D73A49">px</span><span style="color: #24292E"> </span><span style="color: #005CC5">solid</span><span style="color: #24292E"> </span><span style="color: #005CC5">var</span><span style="color: #24292E">(</span><span style="color: #E36209">--c-brand</span><span style="color: #24292E">);</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">height</span><span style="color: #24292E">: </span><span style="color: #005CC5">80</span><span style="color: #D73A49">px</span><span style="color: #24292E">;</span></span>
<span class="line"><span style="color: #24292E">  </span><span style="color: #005CC5">width</span><span style="color: #24292E">: </span><span style="color: #005CC5">600</span><span style="color: #D73A49">px</span><span style="color: #24292E">;</span></span>
<span class="line"><span style="color: #24292E">}</span></span>
<span class="line"><span style="color: #24292E">&lt;/</span><span style="color: #22863A">style</span><span style="color: #24292E">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo></template>

<script>
      import * as Vue from 'vue'
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { toDisplayString: _toDisplayString, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue

const _hoisted_1 = { class: "card-wrap" }
const _hoisted_2 = { class: "card" }

function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("div", _hoisted_2, _toDisplayString(_ctx.title), 1 /* TEXT */)
  ]))
}
  
    const { ref, defineComponent } = Vue

const democomponentExport = defineComponent({
  setup() {
    const title = ref('vitepress-theme-demoblock')

    return { title }
  }
})
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style>.card-wrap {
  text-align: center;
}

.card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: var(--c-brand);
  background: var(--c-bg);
  border: 1px solid var(--c-brand);
  height: 80px;
  width: 600px;
}</style>