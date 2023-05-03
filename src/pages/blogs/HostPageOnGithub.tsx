import SyntaxHighlighter from "react-syntax-highlighter";

export const HostPageOnGithub = () => {
	return (
		<div>
			<h1 className="flex justify-center text-4xl mb-10">How to Host page on Github</h1>
			<div className="container">
				<ol>
					<li>yarn add -D gh-page</li>
					In package.json add the following:
					<li>
						<SyntaxHighlighter language="json">
							{
								'{"homepage":"http://mshamir11.github.io/mypage/#","name":"mypage",...,"scripts":{..."predeploy":"yarnbuild","deploy":"gh-pages-dbuild","buildNdeploy":"react-scriptsbuild&&yarndeploy",...}}'
							}
						</SyntaxHighlighter>
					</li>
					<li>
						Deploy the website using the following command:
						<li>yarn buildNdeploy</li>
					</li>
				</ol>
			</div>
		</div>
	);
};
