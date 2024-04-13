/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'task-img': "url('src/app/task-icon.png')",
        'project-img': "url('src/app/project-icon.png')",
        'back-img': "url('src/app/project.webp')",
        'back-img-01': "url('src/app/project-icon.jpg')",
        'back-img-02': "url('src/app/project-icon2.png')"
      }
    },
  },
  plugins: [],
}

