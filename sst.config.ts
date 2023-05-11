import type { SSTConfig } from 'sst';
import { Config, SvelteKitSite } from 'sst/constructs';

export default {
	config(_input) {
		return {
			name: 'aladdin',
			region: 'us-east-1'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new SvelteKitSite(stack, 'site', {
				environment: {
					DATABASE_URL: Config.Secret.DATABASE_URL
				}
			});
			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
