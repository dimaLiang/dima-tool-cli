import stashMode from './stashMode';
import copyMode from './copyMode';

export = function branchMerge(params: branchMergeOptions) {
  const { mode = 'copy' } = params;
  if (mode === 'stash') {
    stashMode();
  }
  if (mode === 'copy') {
    copyMode();
  }
};
