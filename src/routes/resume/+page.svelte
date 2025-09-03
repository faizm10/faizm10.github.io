<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Faiz Mustansar – Resume"
  description="Computer Science student and web developer. Building meaningful web applications and software solutions."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">University of Guelph</h3>
      <div class="text-neutral-500 mb-0.5">2023 — 2027</div>
    </div>
    <p class="byline">Bachelor of Computing Honours Degree</p>
    <p class="text-neutral-600">Primary institution</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">University of Waterloo</h3>
      <div class="text-neutral-500 mb-0.5">2023 — 2027</div>
    </div>
    <p class="byline">Part-time courses</p>
    <p class="text-neutral-600">Additional studies to expand knowledge and skills</p>
  </div>

  <p>Currently pursuing my degree with a focus on computer science and web development.</p>

  <h4 class="font-medium mt-4 mb-1">Current Coursework:</h4>
  <ul>
    <li>
      <strong>CIS2910</strong> - Discrete Structures in Computing II
    </li>
    <li>
      <strong>CIS1050</strong> - Web Design & Development
    </li>
    <li>
      <strong>CIS2500</strong> - Intermediate Programming
    </li>
    <li>
      <strong>STAT2040</strong> - Statistics I
    </li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Extracurricular Activities:</h4>
  <ul>
    <li>
      <strong>Intramurals</strong> - Active Player
      <p class="text-neutral-600 text-sm">Participating in competitive intramural sports including ping pong, soccer, and basketball</p>
    </li>
  </ul>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Technical Skills</h2>

  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h4 class="font-medium mb-2">Programming Languages:</h4>
      <ul class="space-y-1">
        <li>Python - Data analysis, automation, machine learning</li>
        <li>JavaScript/TypeScript - Web development, React, Next.js</li>
        <li>Java - Object-oriented programming, algorithms</li>
        <li>C - Low-level programming, system understanding</li>
        <li>HTML/CSS - Web design, responsive layouts</li>
      </ul>
    </div>

    <div>
      <h4 class="font-medium mb-2">Technologies & Tools:</h4>
      <ul class="space-y-1">
        <li>React & Next.js - Modern web applications</li>
        <li>Supabase - Backend-as-a-Service</li>
        <li>Tailwind CSS - Utility-first CSS framework</li>
        <li>Git & GitHub - Version control, collaboration</li>
        <li>Linux - Command line, system administration</li>
        <li>MySQL - Database design and management</li>
      </ul>
    </div>
  </div>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Projects & Achievements</h2>

  <div class="space-y-6">
    <div>
      <h4 class="font-medium">uoguelph.courses</h4>
      <p class="text-neutral-600">Course search and review platform for University of Guelph students</p>
      <p class="text-sm text-neutral-500">Technologies: Full-stack web development, modern UI/UX</p>
    </div>
  </div>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Interests & Goals</h2>

  <p class="mb-4">
    I'm passionate about system design, full stack development, and artificial intelligence. My goal is to create meaningful software solutions that can make a positive impact on people's lives.
  </p>

  <p>
    I enjoy learning new technologies and collaborating with other developers to build innovative applications.
  </p>
</section>

<style lang="postcss">
  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
