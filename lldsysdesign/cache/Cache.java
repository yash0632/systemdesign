import java.util.HashMap;
import java.util.LinkedHashMap;


public class Cache<K,V>{
    private final EvictionPolicy<K> evictionPolicy;
    private final Storage<K,V> storage;
    private final Integer capacity;

    public Cache(EvictionPolicy evictionPolicy, Storage<K,V> storage,Integer capacity){
        this.evictionPolicy = evictionPolicy;
        this.storage = storage;
        this.capacity = capacity;
    }

    public void put(K key,V value){
        if(storage.size() >= capacity){
            K keyToEvict = evictionPolicy.evict();
            storage.remove(keyToEvict);
        }
        storage.add(key,value);
    }

    public V get(K key){
        V value =  storage.get(key);
        if(value != null){
            evictionPolicy.recordAccess(key);
        }
        return value;
    }

    public void remove(K key){
        storage.remove(key);
    }
    
}   

//add
//get
//remove
interface Storage<K,V>{
    public void add(K key,V value);
    V get(K key);
    void remove(K key);
    int size();
}


class MapStorage<K,V> implements Storage<K,V>{
    HashMap<K,V> mapStorage;

    MapStorage(){
        this.mapStorage = new HashMap<>();
    }

    public void add(K key,V value){
        this.mapStorage.put(key,value);
    }

    public V get(K key){
        return mapStorage.get(key);
    }

    public void remove(K key){
        if(mapStorage.containsKey(key)){
            mapStorage.remove(key);
        }
    }

    public int size(){
        return mapStorage.size();
    }

}


interface EvictionPolicy<K>{
    K evict();
    void recordAccess(K key);
    void remove(K key);
}


class LRUEvictionPolicy<K> implements EvictionPolicy<K>{

    LinkedHashMap<K,Void> accessOrder;

    public LRUEvictionPolicy(){
        this.accessOrder = new LinkedHashMap<>(16, 0.75f, true);
    }
    
    public K evict(){
        //get least recently used key which is first value in accessOrder
        K keyToEvict = this.accessOrder.entrySet().iterator().next().getKey();
        this.accessOrder.remove(keyToEvict);
        return keyToEvict;
    }

    public void recordAccess(K key){
        //this.accessOrder.get(key);
        this.accessOrder.remove(key);
        this.accessOrder.put(key,null);
    }

    public void remove(K key){
        this.accessOrder.remove(key);
    }
}
//OPEN CLOSED PRINCIPLE
//Single Responsibility Principle
//Dependency Inversion Principle
//Interface Segregation Principle
//Liskov Substitution Principle
