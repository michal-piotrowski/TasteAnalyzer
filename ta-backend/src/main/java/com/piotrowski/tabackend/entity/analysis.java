package com.piotrowski.tabackend.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Map;

/**
 * Created by Michał Piotrowski on 2018-11-21.
 */

@Entity
@Table(name = "UpToDateAnalyses")
public class analysis {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int userId;

    /**
     * Pair Key represents Hour of day, Value represents average song count
     */
    @ElementCollection
    private Map<Integer, Integer> listeningHours;
    private String favoriteArtistId;
    @ElementCollection
    private List<String> favoriteGenres;
    private Double avgDanceability;
    private Double acousticness;
    private Double energy;
    private Double instrumentalness;
    private Double liveness;
    private Double loudness;
    private Double speechiness;

}
