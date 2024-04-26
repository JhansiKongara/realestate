import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface productinterface {
  id: string;
  price: string;
  location: string;
  title: string;
  url: string;
  subtitle: string;
  content: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(private route: ActivatedRoute) {}
  product: any;
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.product =
      this.members.filter((item) => item?.id == id)[0] || undefined;
  }

  members = [
    {
      id: '1',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://keyvendors.com/blogs/wp-content/uploads/2023/06/interior-design-company-1-1024x602.jpg',
    },
    {
      id: '2',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://housing.com/news/wp-content/uploads/2023/03/Flat-interior-design-ideas-Tips-to-design-your-dream-home-01.jpg',
    },
    {
      id: '3',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1647506927/Website/CMS-Uploads/aqxnv6kurdiziavjxsjh.jpg',
    },
    {
      id: '4',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1647506927/Website/CMS-Uploads/aqxnv6kurdiziavjxsjh.jpg',
    },
    {
      id: '5',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1647506927/Website/CMS-Uploads/aqxnv6kurdiziavjxsjh.jpg',
    },
    {
      id: '6',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://keyvendors.com/blogs/wp-content/uploads/2023/06/interior-design-company-1-1024x602.jpg',
    },
    {
      id: '7',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://housing.com/news/wp-content/uploads/2023/03/Flat-interior-design-ideas-Tips-to-design-your-dream-home-01.jpg',
    },
    {
      id: '8',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/05/26144958/RIS_147-1.jpg',
    },
  ];
}
