import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React, { Fragment } from "react";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();

		const page = renderPage(Component => props =>
			sheet.collectStyles(<Component {...props} />)
		);

		const styleElements = sheet.getStyleElement();
		return { ...page, styleElements };
	}

	render() {
		const { styleElements } = this.props;

		return (
			<html>
				<Head>
					<div dangerouslySetInnerHTML={{
						__html: `
   <!--
  '+++'   -++/++++++++++++++++++++++++++++++++-                                                     
  -+:' '-++sdNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                                     
  '' '-++sdNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                                     
   '-++sdNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                                     
  .++sdNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                                     
  -smNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                                     
  +NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                                     
  +NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                                     
  +NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                                     
  +NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                                     
  +NNNNNNNNNNNNNNNNNNNysssdNNNNNhso++oymNNNNNN+                                                     
  +NNNNNNNNNNNNNNNNNNN+...sNNNh:........+mNNNN+                                                     
  +NNNNNNNNNNNNNNNNNNN+...sNNd...-ydds-+hmNNNN+                                                     
  +NNNNNNNNNNNNNNNNNNN/...sNNd...-hNNNNNNNNNNN+       ':/++/-                              ':osso-  
  +NNNNNNNNNNNNNNNNNNN/...sNNNs....-/oymNNNNNN+     .yNmysyNNh'                           :mNy//+.  
  +NNNNNNNNNNNNNNNNNNN/...sNNNNdo:....../hNNNN+     hNm.   ymd.  :oyhhy+'  .yy+.oyhy-  /yydNNhyys   
  +NNNNNNNNNNNNNNNNNNN+...sNNNNNNNmhs/....hNNN+    .NNy        'dNd/-/mNd  /NNh+:+NNh  -:/NNd:::-   
  +NNNNNNNNNNNNNdyNNNN/...yNNmhohNNNNNo...+NNN+    /NN/    ''  +NN/  'mNd  yNN.  -NNo    :NN+       
  +NNNNNNNNNNNy:..:os+...-dNd:.../oss+-...yNNN+    sNN:   sNm: hNN.  :NNo 'mNd   +NN:    sNN-       
  +NNNNNNNNNNNNs:......./dNNNmo:.......-/hNNNN+    -dNmhhmNd:  /mNdyymms' :NNo   hNm'    dNm        
  +NNNNNNNNNNNNNNmhyyyhmNNNNNNNNmhyyyhdmNNNNNN+      .::::.     '-:::-'   .::'   +++    .NNs        
  +NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+                                         /mm/        
  '+++++++++++++++++++++++++++++++++++++++++++'                                                     
  -->
  ` }}
					/>
					{styleElements}
				</Head>
				<body>
					<div className="root">
						<Main />
					</div>
					<NextScript />
				</body>
			</html>
		);
	}
}
