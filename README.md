# Next.js Scroll-Driven Animation Demo

This project demonstrates a scroll-driven animation using Next.js and Framer Motion. It showcases a series of images that animate into view as the user scrolls down the page.

## Features

- Scroll-driven animations
- Image reveal effect
- Parallax text effect
- Progress bar indicating scroll position

## Technologies Used

- Next.js
- React
- Framer Motion
- TypeScript

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/nextjs-scroll-animation-demo.git
   ```

2. Navigate to the project directory:
   ```
   cd nextjs-scroll-animation-demo
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## How It Works

The main component uses Framer Motion's `useScroll` hook to track the scroll progress. As the user scrolls, images are revealed and animated into place using motion values derived from the scroll progress.

Key features of the animation include:

- Images sliding in from the right as the user scrolls
- Opacity transitions for smooth revealing of images
- Parallax effect on the image numbers
- A progress bar at the bottom of the screen

## Customization

You can customize the animation by modifying the `ImageSection` component in the `app/page.tsx` file. Adjust the transform values, timing, and easing functions to achieve different effects.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Framer Motion Documentation](https://www.framer.com/motion/)

