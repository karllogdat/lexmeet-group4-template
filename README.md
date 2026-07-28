# LexMeet Group 4 Template (Blue)

<p align="center">
  <img src="./images/home.png" alt="Home">
</p>

## Starting the Project

This project requires a working NodeJS installation.

First, clone the repository on your machine and go to its directory.

```bash
git clone https://github.com/karllogdat/lexmeet-group4-template.git
cd lexmeet-group4-template
```

Next, install the project's dependencies using:

```bash
npm install
```

Lastly, run the project.

```bash
npm run dev
```

## Contributing

To contribute: first, clone the repository on your machine using:

```bash
git clone https://github.com/karllogdat/lexmeet-group4-template.git
```

### Adding Features (Pages, Components, etc)

When adding new features, including pages or components, create a new branch
following the name convention (without spaces):

```text
feat-[feature name]
```

Create a branch with your chosen branch name using:

```bash
git checkout -u feat-[feature name]
```

To merge your newly added features, push your additions/changes upstream using:

```bash
git add -A
git commit -m "feature message such as changes or additions made in this commit"
git push origin feat-[feature name]
```

Then, create a pull request from `feat-[feature name]` to `master` where the
changes will be reviewed. After review, your new commits will be in the
`master` branch.

### Making Fixes

Follow the steps in [adding features](#adding-features-pages-components-etc),
but follow this branch naming format:

```text
fix-[fix name]
```
