import {CPMPluginCreator} from "@cloudimpl-inc/cpm";

const init: CPMPluginCreator = ctx => {
    return {
        name: 'dummy',
        actions: {
            "task ls": (ctx, input) => {
                console.log('list tasks');
                return {};
            },
            "task get": (ctx, input) => {
                console.log(`get task with id ${input.args.id}`);
                return {id: input.args.id, title: 'test'};
            },
            "repo clone": (ctx, input) => {
                console.log(`clone repo with url ${input.args.url}`)
                return {org: 'test-org', repo: 'test-repo', path: 'test-org/test-repo'};
            },
            "repo checkout": (ctx, input) => {
                console.log(`checkout repo branch ${input.options.branch}`)
                return {};
            }
        }
    }
}

export default init;