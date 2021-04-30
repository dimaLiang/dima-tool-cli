type pluginName = 'app-creater' | 'branch-merge';

interface Options {
  pluginName: pluginName;
}

type branchMergeMode = 'copy' | 'stash';
interface branchMergeOptions extends Options {
  mode?: branchMergeMode;
}
