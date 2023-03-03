import { Component } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

export interface LatLngLiteral {
  lat: number;
  lng: number;
}
export const submissionList = [
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 21.197746,
    lng: 72.863632,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Unassigned',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 19.076,
    lng: 72.8777,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.341042,
    lng: -71.217133,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Uncomplete',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.810356,
    lng: -70.893875,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 41.638409,
    lng: -70.941208,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.419331,
    lng: -71.11972,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.429752,
    lng: -71.071022,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Uncomplete',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.525482,
    lng: -71.764183,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.701283,
    lng: -71.175682,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.203217,
    lng: -72.625481,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Uncomplete',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.587334,
    lng: -72.603416,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.280418,
    lng: -71.423233,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Uncomplete',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.586716,
    lng: -71.814468,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.408623,
    lng: -71.056999,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Unassigned',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.392925,
    lng: -71.037109,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.536457,
    lng: -70.985786,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.536457,
    lng: -70.985786,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.536457,
    lng: -70.985786,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Unassigned',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.536457,
    lng: -70.985786,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 28.679079,
    lng: 77.06971,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 26.85,
    lng: 80.949997,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.536457,
    lng: -70.985786,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 16.1667,
    lng: 74.833298,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 21.25,
    lng: 81.629997,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 24.7945,
    lng: 73.055,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.536457,
    lng: -70.985786,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 42.536457,
    lng: 73.300003,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 16.994444,
    lng: -70.985786,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 24.879999,
    lng: 74.629997,
    // label: 'A',
    draggable: true,
  },
  {
    task: 'Requires Location',
    status: 'Low Risk',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: 'Oct 6, 02:38 AM',
    lat: 12.12,
    lng: 76.68,
    // label: 'A',
    draggable: true,
  },
];
export class AppComponent {
  pickupAddress = 'New York, NY';
  pickupLat = 40.712776;
  pickupLng = -74.005974;

  dropAddress = 'Washington, DC';
  dropLat = 38.907192;
  dropLng = -77.036871;
}
@Component({
  selector: 'app-map-intigration',
  templateUrl: './map-intigration.component.html',
  styleUrls: ['./map-intigration.component.scss'],
})
export class MapIntigrationComponent {
  // public submissionMapData: any[] = submissionMap;
  public markers: any[] = submissionList;
  latitude = 54.5947;
  longitude = -4.7873;

  centerLatitude = this.latitude;
  centerLongitude = this.longitude;
  public zoom: number = 10;
  lat = 21.262146;
  lng = 73.097996;

  lat1 = 21.278307;
  lng1 = 72.736806;
  latlng = [
    [23.0285312, 72.5262336],
    [19.076, 72.8777],
  ];

  intervalId: any;
  timeoutId: any;

  //for geo location
  pickupAddress = 'New York, NY';
  pickupLat: number;
  pickupLng: number;

  dropAddress = 'Washington, DC';
  dropLat: number;
  dropLng: number;

  path: Array<{ lat: number; lng: number }> = [];

  constructor(private mapsAPILoader: MapsAPILoader) {}

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
    });
  }
  start() {
    this.intervalId = setInterval(() => {
      this.lat1 += 0.001;
      this.lng1 += 0.001;
    }, 1000);
    console.log('this.lat1 :>> ', this.lat1);
    console.log('this.lat1 :>> ', this.lng1);

    this.timeoutId = setTimeout(() => {
      this.stop();
    }, 50000000);
  }

  stop() {
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }
  //(centerChange)="onCenterChange($event)"

  // onCenterChange(event: LatLngLiteral) {
  //   console.log('Center changed', event);
  //   this.centerLatitude = event.lat;
  //   this.centerLongitude = event.lng;
  //   // do something with the new center coordinates
  // }
  markerDragEnd(m: any, $event: any) {
    console.log('dragEnd', m, $event);
  }

  ngOnInit(): void {
    console.log('object :>> ', this.markers);
    this.mapsAPILoader.load().then(() => {
      const geocoder = new google.maps.Geocoder();

      // Get the pickup latitude and longitude
      geocoder.geocode({ address: this.pickupAddress }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          this.pickupLat = results[0].geometry.location.lat();
          this.pickupLng = results[0].geometry.location.lng();
        }
      });

      // Get the drop latitude and longitude
      geocoder.geocode({ address: this.dropAddress }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          this.dropLat = results[0].geometry.location.lat();
          this.dropLng = results[0].geometry.location.lng();

          // Add the path for the polyline
          this.path = [
            { lat: this.pickupLat, lng: this.pickupLng },
            { lat: this.dropLat, lng: this.dropLng },
          ];
        }
      });
    });
  }
}
