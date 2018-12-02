package com.piotrowski.tabackend.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Michał Piotrowski on 2018-11-21.
 */
@Entity
@Table(name="listeningHistory")
public class listeningHistory extends AuditModel {

    @Id
//    @ManyToOne
//    @JoinColumn(name = "id")
    private Integer userId;
    private String songId;
    private Date timestamp;

}
