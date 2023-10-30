"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";
import Paragraph from "@/components/Paragraph/Paragraph";
import Divider from "@/components/Divider/Divider";
import { useTheme } from "@/contexts/ThemeContext";

const Projects: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`${theme} flex flex-col items-center justify-center px-8 w-full`}
    >
      <SectionHeader>projects</SectionHeader>

      <Paragraph>
        <strong>
          I've been fortunate to work on some pretty exciting projects over the
          years. Here are a few of my favourites:
        </strong>
      </Paragraph>

      <ProjectHeader title="Custom Project Management" />

      <Paragraph>
        This project involved the development of a sophisticated web application
        for one of South Africa's Big Four banks. The application was designed
        to manage Projects, Interdependencies, Risks, Issues, and Capacity,
        streamlining various facets of project management within the financial
        institution. The technology stack included Angular for the front-end,
        NodeJS for the back-end, TypeScript for enhanced code quality, and MySQL
        for database management.
      </Paragraph>

      <Paragraph>
        Users could assemble and manage their project teams through the
        interface, assigning generic rates to groups while also offering the
        flexibility to override these rates on an individual basis. This feature
        enabled more precise budgeting and resource allocation.
      </Paragraph>

      <Paragraph>
        A standout aspect of the application was the capability to register
        projects against managed templates. These templates not only helped in
        guiding the project through its statuses and phases but also enforced
        custom business rules that formalised the governance of the project,
        ensuring a structured and compliant approach.
      </Paragraph>

      <Paragraph>
        The system provided stakeholders with the ability to log Risks or Issues
        against active projects. Each risk or issue was assigned specific tasks
        with defined due dates, and the status of these could be tracked within
        the application. Interested parties had the option to subscribe to these
        risks or issues and were notified about any changes over time.
      </Paragraph>

      <Paragraph>
        Another advanced feature allowed Project Managers to register task-level
        interdependencies across multiple projects. This capability helped in
        keeping real-time track of progress and facilitated more effective work
        planning.
      </Paragraph>

      <Paragraph>
        By incorporating these functionalities into a user-friendly interface,
        developed using Angular, NodeJS, TypeScript, and MySQL, the application
        emerged as a comprehensive tool for project management. It significantly
        enhanced transparency, accountability, and efficiency within one of
        South Africa’s leading financial institutions.
      </Paragraph>

      <ProjectHeader title="Agendas and Minutes" />

      <Paragraph>
        This project involved the development of a web application geared
        towards the efficient management of formal meeting minutes. The
        application served as a one-stop solution for capturing, sharing, and
        distributing minutes in real-time.
      </Paragraph>

      <Paragraph>
        Developed to facilitate collaboration and accountability, the app
        allowed users to capture minutes live during the meeting. Agenda items
        could be directly linked to specific minute entries, ensuring that
        discussions stayed on track. Moreover, tasks could be dynamically
        assigned to specified attendees, complete with deadlines, promoting
        follow-through and accountability.
      </Paragraph>

      <Paragraph>
        One of the standout features was the ability to share a live link with
        external parties, allowing them to follow along with the meeting's
        progress in real time. This feature enhanced transparency and ensured
        all stakeholders remained informed.
      </Paragraph>

      <Paragraph>
        At the conclusion of the meeting, the application provided options for
        distributing the minutes to attendees either via shareable links or as
        PDF attachments. This flexibility made it easier for organisations to
        document and archive meeting outcomes in a manner most convenient to
        them.
      </Paragraph>

      <ProjectHeader title="CRM" />

      <Paragraph>
        This project entailed the creation of a lightweight Customer
        Relationship Management (CRM) system, specifically designed to
        streamline the sales process for small to medium-sized enterprises.
        Developed using PHP and the Laravel framework, the system leveraged a
        MySQL database to efficiently manage large sets of customer data.
      </Paragraph>

      <Paragraph>
        The system was designed to be highly customisable, with the ability to
        add new fields and modify existing ones. This allowed businesses to
        tailor the system to their specific needs, ensuring a seamless
        integration with their existing workflows. One of the system's most
        notable features was its integrated sales tracking module, offering
        real-time insights into sales activities. This module was further
        enhanced by a visual sales funnel that allowed sales teams to identify
        bottlenecks and optimise their strategies effectively.
      </Paragraph>

      <Paragraph>
        An additional standout feature was the inclusion of ratios on sales per
        lead. This provided invaluable metrics for gauging the effectiveness of
        sales campaigns and assessing individual team member performance.
      </Paragraph>

      <Paragraph>
        Overall, the project's use of Laravel and MySQL not only ensured robust
        performance but also provided advanced yet user-friendly features. These
        empowered businesses to make data-driven decisions, bolster customer
        engagement, and ultimately improve their sales metrics.
      </Paragraph>

      <ProjectHeader title="Internet Proxy Interface" />

      <Paragraph>
        This project focused on creating a user-friendly interface for managing
        internet access in educational settings via a Squid proxy. Targeted
        primarily at lecturers, the interface enabled real-time control of
        internet accessibility within classroom subnets, allowing educators to
        tailor the online environment to suit the needs of their lessons. This
        was before the advent of the Mobile Phone which renders this solution
        useless today 😂
      </Paragraph>

      <Paragraph>
        The interface was developed using PHP and had the ability to dynamically
        create custom configurations based on predefined classroom subnets. This
        feature allowed lecturers to easily manage which websites or services
        could be accessed during class time, thereby minimising distractions and
        promoting student focus.
      </Paragraph>

      <Paragraph>
        By integrating with existing Squid proxy settings, the project provided
        a seamless way for lecturers to exercise granular control over internet
        usage, without requiring in-depth technical knowledge. This served to
        enhance the educational experience by empowering educators to create
        more focused and engaged learning environments.
      </Paragraph>

      <Divider />
    </section>
  );
};

export default Projects;
