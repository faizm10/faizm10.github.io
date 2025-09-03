<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "uoguelph.courses",
      href: "/projects#uoguelph-courses",
      desc: "course search and review platform for University of Guelph",
    },
  ];
</script>

<Seo
  title="Faiz Mustansar"
  description="Computer Science student and web developer. Building meaningful web applications and software solutions."
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="faiz-is"
>
  <span class="g">is a</span> computer science student<span class="g">,</span
  ><br />
  developer<span class="g">, and</span><br />
  learner<span class="g">.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I primarily study at the <a class="link" href="https://uoguelph.ca"
        >University of Guelph</a
      >, pursuing my Bachelor of Computing Honours Degree, and also take
      part-time courses at the
      <a class="link" href="https://uwaterloo.ca">University of Waterloo</a>.
    </p>

    <p>
      I hope to develop better <em>web applications</em> and
      <em>software solutions</em> that can make a meaningful impact on people's lives.
    </p>

    <p>
      Towards that goal, I am passionate about <em>full-stack development</em>,
      which allows me to create complete solutions from frontend to backend; and
      <em>emerging technologies</em>, how we can leverage new tools and
      frameworks to build innovative applications.
    </p>
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Notable work:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
        </div>
      </a>
    {/each}
  </div>

  <div class="space-y-5">
    <p>
      I am currently a <strong>Computer Science student</strong> at the
      <strong>University of Guelph</strong>, where I'm actively involved in
      various academic and extracurricular activities. I also take part-time
      courses at the <strong>University of Waterloo</strong> to expand my knowledge
      and skills.
    </p>

    <p>
      I enjoy playing intramural sports including ping pong, soccer, and
      basketball.
    </p>

    <p>
      My academic focus includes courses in <strong>Discrete Structures</strong
      >, <strong>Web Design & Development</strong>,
      <strong>Intermediate Programming</strong>, and
      <strong>Statistics</strong>. I'm passionate about learning new
      technologies and applying them to real-world problems.
    </p>

    <p>
      Other interests: system design, full stack development, and artificial
      intelligence.
    </p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #faiz-is {
      @apply -mt-10;
    }
  }
</style>
