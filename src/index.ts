import { MissionMap } from './core/Map/mission-map.js';
import { MapObjectCollection } from './core/MapObjectCollection/map-object-collection.js';
import { MapComponent } from './ui/components/map-component/map-component.js';

const root = document.getElementById('root');

if (root) {
  const map = new MapComponent(root, new MissionMap(new MapObjectCollection()));
  map.render();
}
