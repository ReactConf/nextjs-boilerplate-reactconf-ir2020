import React from "react";
import NextHead from "next/head";

const Head = () => (
	<NextHead>
		<script
			dangerouslySetInnerHTML={{
				__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',"GTM-MKF6XHF");`
			}}
		/>
		<script
			dangerouslySetInnerHTML={{
				__html: `!function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,localStorage.getItem("rayToken")?t.src="https://app.raychat.io/scripts/js/"+o+"?rid="+localStorage.getItem("rayToken")+"&href="+window.location.href:t.src="https://app.raychat.io/scripts/js/"+o;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}var e=document,a=window,o="46f7e242-0298-4958-9b55-d67d7907bec9";"complete"==e.readyState?t():a.attachEvent?a.attachEvent("onload",t):a.addEventListener("load",t,!1)}();`
			}}
		/>
		<noscript
			dangerouslySetInnerHTML={{
				__html: `
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-MKF6XHF
								}"
                            height="0"
                            width="0"
                            style={{display:'none",visibility:"hidden"}}
                        >
                        </iframe>
                    `
			}}
		/>
		<link
			rel="apple-touch-icon"
			sizes="57x57"
			href="/icons/apple-icon-57x57.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="60x60"
			href="/icons/apple-icon-60x60.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="72x72"
			href="/icons/apple-icon-72x72.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="76x76"
			href="/icons/apple-icon-76x76.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="114x114"
			href="/icons/apple-icon-114x114.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="120x120"
			href="/icons/apple-icon-120x120.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="144x144"
			href="/icons/apple-icon-144x144.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="152x152"
			href="/icons/apple-icon-152x152.png"
		/>
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/icons/apple-icon-180x180.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="192x192"
			href="/icons/android-icon-192x192.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="/icons/favicon-32x32.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="96x96"
			href="/icons/favicon-96x96.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/icons/favicon-16x16.png"
		/>
		<link rel="manifest" href="/manifest.json" />
		<meta name="msapplication-TileColor" content="#1a1a21" />
		<meta
			name="msapplication-TileImage"
			content="/icons/ms-icon-144x144.png"
		/>
		<meta name="theme-color" content="#1a1a21" />
	</NextHead>
);

export default Head;
