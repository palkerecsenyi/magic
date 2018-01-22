# Contributing guidelines
Before directly contributing, first discuss your proposed changes through Gitter, or add an issue. Don't add a pull request before doing so.

We openly welcome anything - we're fine with constructive critiscism, crazy feature request, and the correction of a single character!
After all, the more contributions a project receives (no matter how big or small), the faster it develops.

## Issues
Therefore, you can file issues about practically anything. However, you must:
* Add as much description as possible, however small the change.
* Not use hateful language.
* Not include anything completely unrelated (e.g. advertising your repository).
* Use the template provided, as applicable.

## Pull requests
When adding a pull request, always update the CHANGELOG.md file to show the changes you've made, using the existing format.
* Use descriptive language, and explain everything you're adding.
* Update the version number in package.json to represent the version that your addition would be working towards.
* Prepare to actively discuss changes - stay online for at least a couple of minutes after adding a pull request to see and reply to comments and questions.
* If changing main CSS, ONLY DIRECTLY CHANGE SASS, don't change the output CSS. Write additions to the SCSS file, and then compile it and update both magic.css, and magic.min.css in the dist folder.
* Ensure that the Travis build succeeds - if SASS finds an issue when test-compiling your SCSS, the build will fail, and we will be unable to merge your pull request.

That's it! Please contribute...
