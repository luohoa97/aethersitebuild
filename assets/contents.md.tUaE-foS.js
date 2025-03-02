import{_ as i,c as a,o as t,ag as e}from"./chunks/framework.1L-BeKqY.js";const c=JSON.parse('{"title":"Welcome to Aether Docs","description":"","frontmatter":{"title":"Welcome to Aether Docs","outline":"deep"},"headers":[],"relativePath":"contents.md","filePath":"contents.md"}'),n={name:"contents.md"};function l(h,s,o,p,r,d){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="welcome-to-aether-documentation" tabindex="-1">Welcome to Aether Documentation <a class="header-anchor" href="#welcome-to-aether-documentation" aria-label="Permalink to &quot;Welcome to Aether Documentation&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">Important</p><p>Note, this site isn&#39;t finished so the download may lead to a 404</p></div><div class="tip custom-block"><p class="custom-block-title">About Aether</p><p>Aether is a lightweight, high-performance programming language inspired by Lua, designed for fast and demanding applications.</p></div><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>To install Aether, follow the instructions for your operating system:</p><h3 id="🐧-linux-debian-ubuntu" tabindex="-1">🐧 Linux (Debian/Ubuntu) <a class="header-anchor" href="#🐧-linux-debian-ubuntu" aria-label="Permalink to &quot;🐧 Linux (Debian/Ubuntu)&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build-essential</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libssl-dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://luohoa97.github.io/aether-site/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span></span></code></pre></div><h3 id="🐧-linux-fedora" tabindex="-1">🐧 Linux (Fedora) <a class="header-anchor" href="#🐧-linux-fedora" aria-label="Permalink to &quot;🐧 Linux (Fedora)&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssl-devel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://luohoa97.github.io/aether-site/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span></span></code></pre></div><h3 id="🍏-macos-homebrew" tabindex="-1">🍏 macOS (Homebrew) <a class="header-anchor" href="#🍏-macos-homebrew" aria-label="Permalink to &quot;🍏 macOS (Homebrew)&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NOT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IMPLEMENTED</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Important</p><p>Ensure you have Homebrew installed before running the command above.<br> You can install it from <a href="https://brew.sh/" target="_blank" rel="noreferrer">brew.sh</a>.</p></div><h3 id="🖥️-windows-scoop" tabindex="-1">🖥️ Windows (Scoop) <a class="header-anchor" href="#🖥️-windows-scoop" aria-label="Permalink to &quot;🖥️ Windows (Scoop)&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NOT IMPLEMENTED</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Important</p><p>Ensure you have <a href="https://scoop.sh/" target="_blank" rel="noreferrer">Scoop</a> installed before running the command above.</p></div><p>After installation, verify Aether is installed by running:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aether</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div>`,17)]))}const u=i(n,[["render",l]]);export{c as __pageData,u as default};
