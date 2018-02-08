import { Component, OnInit } from '@angular/core';
import { CompanyValue } from './service/company-value';
import { Perk } from './service/perk';
import { ActivatedRoute } from '@angular/router';
import { OpenPosition } from './service/open-position';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  headerText = 'Join our Team';
  subheaderText = 'It takes an entire team united behind something big.  ' +
  'Together, we work hard, we laugh a lot, we brainstorm nonstop, and we ' +
  'give the best high-fives in town.';
  ourValues: CompanyValue[] = [
    {
      title: 'Be One Team',
      description: 'As I\'ve helped my 2-year-old daughter through the first ' +
      'couple stages of toilet training, it occurred to me that sometimes ' +
      'software development is a similiar process.  Lorem ipsum dolor sit ' +
      'amet, consectetur adipiscing elit. Aliquam viverra sapien a tortor ' +
      'malesuada, ut mattis mauris feugiat. Nam tincidunt enim et diam ' +
      'lobortis, sed lacinia libero scelerisque. Nam tempus massa in ipsum ' +
      'pellentesque, quis blandit justo dignissim. Nullam porttitor metus ' +
      'eget luctus volutpat. Vestibulum ante est, condimentum nec purus at, ' +
      'pellentesque feugiat erat. Aenean maximus ultricies massa, at rutrum ' +
      'nibh semper ac. Donec cursus accumsan risus ac posuere. Fusce ' +
      'volutpat, ullamcorper velit non, pharetra mi. Mauris mi lectus, ' +
      'ornare eu sapien vitae, semper rutrum nunc. Donec nec venenatis ' +
      'mauris, non hendrerit justo.'
    },
    {
      title: 'Be Open',
      description: 'As I\'ve helped my 2-year-old daughter through the first ' +
      'couple stages of toilet training, it occurred to me that sometimes ' +
      'software development is a similiar process.  Lorem ipsum dolor sit ' +
      'amet, consectetur adipiscing elit. Aliquam viverra sapien a tortor ' +
      'malesuada, ut mattis mauris feugiat. Nam tincidunt enim et diam ' +
      'lobortis, sed lacinia libero scelerisque. Nam tempus massa in ipsum ' +
      'pellentesque, quis blandit justo dignissim. Nullam porttitor metus ' +
      'eget luctus volutpat. Vestibulum ante est, condimentum nec purus at, ' +
      'pellentesque feugiat erat. Aenean maximus ultricies massa, at rutrum ' +
      'nibh semper ac. Donec cursus accumsan risus ac posuere. Fusce ' +
      'volutpat, ullamcorper velit non, pharetra mi. Mauris mi lectus, ' +
      'ornare eu sapien vitae, semper rutrum nunc. Donec nec venenatis ' +
      'mauris, non hendrerit justo.  BE OPEN'
    },
    {
      title: 'Drive Impact',
      description: 'As I\'ve helped my 2-year-old daughter through the first ' +
      'couple stages of toilet training, it occurred to me that sometimes ' +
      'software development is a similiar process.  Lorem ipsum dolor sit ' +
      'amet, consectetur adipiscing elit. Aliquam viverra sapien a tortor ' +
      'malesuada, ut mattis mauris feugiat. Nam tincidunt enim et diam ' +
      'lobortis, sed lacinia libero scelerisque. Nam tempus massa in ipsum ' +
      'pellentesque, quis blandit justo dignissim. Nullam porttitor metus ' +
      'eget luctus volutpat. Vestibulum ante est, condimentum nec purus at, ' +
      'pellentesque feugiat erat. Aenean maximus ultricies massa, at rutrum ' +
      'nibh semper ac. Donec cursus accumsan risus ac posuere. Fusce ' +
      'volutpat, ullamcorper velit non, pharetra mi. Mauris mi lectus, ' +
      'ornare eu sapien vitae, semper rutrum nunc. Donec nec venenatis ' +
      'mauris, non hendrerit justo.  DRIVE IMPACT'
    },
  ];
  visibleOurValuesDescription = this.ourValues[0].description;
  perks: Perk[] = [
    {
      title: 'Relax, we\'ve got you covered',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex.'
    },
    {
      title: 'Relax, we\'ve got you covered 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 2'
    },
    {
      title: 'Relax, we\'ve got you covered 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 3'
    },
    {
      title: 'Relax, we\'ve got you covered 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 4'
    },
    {
      title: 'Relax, we\'ve got you covered 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 5'
    },
    {
      title: 'Relax, we\'ve got you covered 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'In rhoncus massa euismod nulla blandit molestie. Maecenas pulvinar ' +
      'lacus ac feugiat tristique. Praesent egestas nisl eget nibh ' +
      'consectetur, nec rutrum ex. 6'
    },
  ];
  openPositions: OpenPosition[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.openPositions = this.route.snapshot.data.openPositions;
    console.log(this.openPositions);
  }

  changeVisibleOurValuesDescription(title: string) {
    const selectedOurValue = this.ourValues
                      .filter(ourValues => ourValues.title === title)[0];

    if (selectedOurValue) {
      this.visibleOurValuesDescription = selectedOurValue.description;
    }
  }
}
