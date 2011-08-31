(= objects* (table))

(deftem object
  id (trunc (* (rand) (expt 10 10)))
  type 'object
  name nil
  parents nil
  children nil
  owners nil)

(def save-objects ()
  "Save all objects to their respective directories"
  (ensure-dir "objects")
  (each (id o) objects*
     (let d (+ "objects/" o!type "s")
       (ensure-dir d)
       (save-table o (+ d "/" o!id)))))

(def load-objects ()
  "Load all objects from their respective directories"
  (ensure-dir "objects")
  (each d (dir "objects")
    (let f (+ "objects/" d)
      (each f (if dir?.f dir.f)
        (let o (temload (sym:trim d 'end #\s)
                        (+ "objects/" f + "/" f))
          (= (objects* o!id) o))))))

