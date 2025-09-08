import { Component } from '@angular/core';
import { importsModule } from '../../imports';

@Component({
  selector: 'app-projects',
  imports: [importsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      projectName: 'Nexa',
      companyName: 'BT Group, Design Engineer Professional',
      description:
        'Created a generic workflow management application using Angular 17. The application has no-code/low-code features and supports dynamic UI screen generation.Used tools like Jira, Confluence, Docker, and Figma, along with Git for version control.Participated in sprint planning and contributed to the front-end architecture using Agile methods.',
    },
    {
      projectName: 'Mobile Workflows',
      companyName: 'BT Group, Design Engineer Professional',
      description:
        'Developed the Mobile Networks Workflow Tool application with Angular 13, which helped reduce development time by providing dynamic form rendering for user interfaces.Automated and streamlined workflows by integrating the user interface with business process management (JBPM).Debugged application components across the full stack (frontend, backend, databases) to ensure seamless functionality.Wrote unit tests with frameworks like Jasmine and Karma to ensure code quality and functionality.',
    },
    {
      projectName: 'Global Network Vision',
      companyName: 'BT Group, Design Engineer Professional',
      description: `Built a business application for a workflow management tool using Angular 8, HTML, CSS3, and Bootstrap. Implemented Angular code for State Management and dynamic form rendering, which included a drag-and-drop feature to improve usability and productivity. Contributed to the project's technical architecture to ensure it was scalable and maintainable.  Participated in Agile Scrum ceremonies and peer code reviews to improve team productivity and maintain code quality.`,
    },
    {
      projectName: 'Digital Customer Experience (TW-HUB) - Telstra, Australia',
      companyName: 'Infosys Limited, Senior Systems Engineer',
      description: `Developed responsive design screens and code from InVision and Zeplin UX/UI wireframes to ensure a seamless user experience across different devices.

Integrated Angular 10 front-end applications with backend systems using RESTful APIs and HTTP requests.

Collaborated with stakeholders to analyze requirements and refine the product backlog.`,
    },
    {
      projectName: 'TW-HUB - Telstra, Australia',
      companyName: 'Infosys Limited, Senior Systems Engineer',
      description: `Quickly identified and fixed key faults in both production and test environments to reduce downtime.

Enabled efficient User Acceptance Testing (UAT) procedures and production deployments.

Ensured the user interface was inclusive and compliant by following UI accessibility standards.

Gained foundational knowledge of Bitbucket and the CI/CD pipeline.`,
    },
    {
      projectName: 'BillPay - Telstra, Australia',
      companyName: 'Infosys Limited, Senior Systems Engineer',
      description:
        'Used SoapUI for API verification and Putty for secure data access to perform extensive sanity testing on database data.',
    },
  ];
  professionalExperience = [
    {
      companyName: 'BT Group',
      designation: 'Design Engineer Professional',
      timePeriod: 'February 2022 - July 2025',
    },
    {
      companyName: 'Infosys Limited',
      designation: 'Senior Systems Engineer',
      timePeriod: 'November 2019 - February 2022',
    },
  ];
}
