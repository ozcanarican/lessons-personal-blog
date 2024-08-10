{
"title":"ozcanarican.com için web",
"desc":"Nextjs ile kişisel blog ve portfolyo webapp tasarımı",
"image":"https://nextjs.org/static/blog/next-7/showcase.png",
"tags":["ref","next","php","node"]
}

---

![Screen shot](/images/test.png)

# H1 cinsi bir başlık buraya geldi

Title: Creating a Personal Blog with Next.js - A Step-by-Step Markdown Guide

In this tutorial, we will walk you through the process of creating a personal blog using Next.js, a popular React framework. By the end of this guide, you'll have a functional, modern, and SEO-friendly blog that's easy to maintain. Let's get started!

## Prerequisites

Before we dive into the tutorial, make sure you have the following prerequisites:

1. Node.js installed on your machine (version 10 or higher)
2. A code editor (e.g., Visual Studio Code, Atom, Sublime Text)
3. Basic understanding of JavaScript and React
4. Familiarity with command line interface (CLI)

## Step 1: Initialize the Project

First, let's create a new Next.js project by running the following command in your terminal:

```bash
npx create-next-app my-blog
```

Replace `my-blog` with the name of your blog. This command will create a new directory containing the starter files for your Next.js application.

## Step 2: Navigate to the Project Directory

Navigate into the newly created project directory using:

```bash
cd my-blog
```

## Step 3: Install Required Dependencies

For this tutorial, we'll use Markdown for creating blog posts. Let's install `next-mdx` to support MDX within our Next.js application. Run the following command:

```bash
npm install next-mdx mdx-deck
```

## Step 4: Configure Next.js for MDX

Create a new file called `next.config.js` in the root directory of your project and add the following content:

```javascript
module.exports = {
  //...
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.module.rules.push({
        test: /\.mdx?$/,
        loader: "@mdx-js/loader",
        options: {
          rehypePlugins: [],
        },
      });
    }
    return config;
  },
};
```

## Step 5: Create the Blog Structure

Inside the `pages` directory, create a new folder called `blog`. Inside this `blog` folder, you can create individual folders for each blog post. Each folder should contain a Markdown file (e.g., `my-first-post.mdx`).

```bash
mkdir pages/blog
touch pages/blog/my-first-post.mdx
```

## Step 6: Write Your First Blog Post

Open the created Markdown file and write your blog post content using Markdown syntax. Here's an example:

```markdown
---
title: My First Blog Post
date: "2021-07-15T00:00:00Z"
---

Hello, world! This is my first blog post. I'm excited to share more content with you in the future.
```

## Step 7: Preview Your Blog Post

To preview your blog post locally, start your Next.js development server by running the following command:

```bash
npm run dev
```

Navigate to `http://localhost:3000/blog/my-first-post` in your browser to see your first blog post!

## Step 8: Styling Your Blog

To style your blog, create a new folder called `styles` in the root directory and add your custom CSS or SCSS files. You can also use libraries like Tailwind CSS or Material UI if you prefer.

## Conclusion

Congratulations! You've successfully created a personal blog using Next.js. With this foundation, you can now expand on your blog by adding more features such as comments, search functionality, and social media integration. Keep learning and building awesome things with Next.js!
