import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-expandable-description',
  imports: [],
  templateUrl: './expandable-description.component.html',
  styleUrl: './expandable-description.component.scss',
  // Add to your component
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0'
      })),
      state('expanded', style({
        height: '*',
        overflow: 'visible',
        opacity: '1'
      })),
      transition('collapsed <=> expanded', [
        animate('3000ms ease-in-out')
      ])
    ])
  ]
})
export class ExpandableDescriptionComponent implements OnInit, OnChanges {

  @Input({ required: true }) ind: number;
  @Input() text: string = '';
  @Input() maxLength: number = 65;
  isExpanded: boolean = false;
  truncatedText: string = '';
  showToggle: boolean = false;
  isShowExpndBtn: boolean = false;

  ngOnInit(): void {
    if (this.text && this.text.length > this.maxLength) {
      this.isShowExpndBtn = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text'] || changes['maxLength']) {
      this.updateTruncatedText();
    }
  }

  updateTruncatedText(): void {
    this.showToggle = this.text.length > this.maxLength;
    this.truncatedText = this.showToggle
      ? this.text.slice(0, this.maxLength) + '...'
      : this.text;
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  objectKeys(item: { [key: string]: string | any[]; }) {
    return Object.keys(item);
  }
  isArray(item: string|any[]) {
  return Array.isArray(item);
}

  moreDes: Map<number, Array<{ [key: string]: string | Array<any> }> | undefined> = new Map([
    [0, [
      { Frontend: `Built with <b> Angular 14</b> for a responsive and dynamic user interface.` },
      { Backend: 'Developed using Spring <b>Boot (Java 8)</b>, implementing REST APIs for efficient data exchange.' },
      { Authentication: ' Integrated <b>LDAP login</b> for centralized and secure user authentication aligned with organizational policies.' },
      {
        'Key Features': [
          'Role-based access control and permission management.',
          'User onboarding, profile updates, and deactivation modules.',
          'Audit logging and activity tracking for compliance.',
          'API-driven architecture enabling integration with other banking services.',
        ]
      },
      { Outcome: 'Improved security, reduced manual user management tasks, and provided a centralized platform for user operations within Dhaka Bank.' },
    ]],
    [1, [
      { Frontend: `Built with Angular 11, offering a responsive UI for signing, verifying, and managing documents.` },
      { Backend: 'Developed with Java 8 and Spring Boot, implementing REST APIs for document handling, signature validation, and audit trails.' },
      { Authentication: 'Integrated <b>LDAP login for Internal User</b> and <b>DB login for Internal User</b> for centralized and secure user authentication aligned with organizational policies.' },
      {
        'Core Features': [
          'Upload, sign, and verify digital documents securely.',
          'Role-based access control for signers, approvers, and administrators.',
          'Real-time status tracking of document signing workflows.',
          'Audit logs for compliance and legal traceability.',
          'Integration-ready APIs for connecting with external enterprise systems.',
        ]
      },
      { Outcome: 'Improved operational efficiency, reduced turnaround time for approvals, and ensured compliance with digital security standards.' },
    ]],
    [2, [
      { Frontend: `Built with Angular 11, offering a responsive UI for signing, verifying, and managing documents.` },
      {
        'Key Features': [
          '<b>Train Listings</b>: View all trains running between selected "From" and "To" stations.',
          '<b>Detailed Train Information</b>: Access schedules, off days, total available seats, and seat pricing for each train.',
          '<b>Real-Time Updates</b>: Get up-to-date data on train availability and timing.',
          '<b>User-Friendly Interface</b>: Built with Angular 19 for a fast, responsive, and smooth browsing experience.',
          '<b>Search and Filter</b>: Quickly locate trains using station names, train numbers, or timings.',
        ]
      },
      {
        'Use Case': `Ideal for passengers and travel planners to check train schedules, plan trips, and view
        seat availability with pricing in one place.` },
    ]],
  ]);
}
